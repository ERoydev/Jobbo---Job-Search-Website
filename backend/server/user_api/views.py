from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_201_CREATED, HTTP_204_NO_CONTENT
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer  # Replace with your serializer
from .models import User
from rest_framework.authentication import TokenAuthentication


class UserRegister(APIView):
    permission_classes = [AllowAny]  # Allow anyone to register

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            token = Token.objects.create(user=user)  # Create auth token
            return Response({'token': token.key}, status=HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = [AllowAny]  # Allow anyone to attempt login

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Both email and password are required'}, status=HTTP_400_BAD_REQUEST)

        # CHECK EMAIL, CHECK PASSWORD
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=HTTP_401_UNAUTHORIZED)

        if not user.check_password(password):
            return Response({'error': 'Invalid credentials'}, status=HTTP_401_UNAUTHORIZED)
        
        try:
            token = Token.objects.get(user=user)  # Retrieve existing token
            token.delete()  # Delete it
        except Token.DoesNotExist:
            pass # No existing token

        token = Token.objects.create(user=user)
        return Response({'token': token.key})
    

class UserLogout(APIView):
    permission_classes = [AllowAny]
    authentication_classes = [TokenAuthentication]  # Add token authentication

    def post(self, request):
        user = request.user

        # Delete token for token-based authentication
        if isinstance(user, Token):  # Check if user is a token
            user.delete()

        return Response(status=HTTP_204_NO_CONTENT)