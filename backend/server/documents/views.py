from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from user_api.models import User
from .models import Document

from .serializers import DocumentSerializer

class DocumentUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, userId):
        try:
            user = User.objects.get(id=userId)
        except User.DoesNotExist:
            return Response({'detail': 'User does not exist.'}, status=404)

        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

class DocumentGetView(APIView):

    def get(self, request, userId):
        try:
            documents_applied = Document.objects.filter(user=userId)
        
        except Document.DoesNotExist:
            return Response({'detail': 'No documents found for this user', 'status': '404'})
        
        serializer = DocumentSerializer(documents_applied, many=True)
        return Response({'data': serializer.data, 'status': '200'})