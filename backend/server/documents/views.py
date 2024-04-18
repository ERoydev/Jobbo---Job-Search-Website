from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from user_api.models import User

from .serializers import DocumentSerializer

class DocumentUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, userId):
        try:
            user = User.objects.get(id=userId)
        except User.DoesNotExist:
            return Response({'detail': 'User does not exist.'}, status=404)

        print('-----------', request.data)

        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
