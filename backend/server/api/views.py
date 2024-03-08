from django.shortcuts import render
from rest_framework import generics
from .models import JobPost
from .serializers import JobPostSerializer

class JobPostListCreate(generics.ListCreateAPIView):
    queryset = JobPost.obects.all()
    serializer_class = JobPostSerializer