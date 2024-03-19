from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import JobPost
from .serializers import JobPostSerializer
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny


class JobPostListCreate(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request):
        print('---MYUSER-----', self.request.user)
        serializer = JobPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # def delete(self, request, *args, **kwargs):
    #     JobPost.objects.all().delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)

class JobPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    lookup_field = "pk"

class JobPostList(APIView):
    def get(self, request, format=None):
        title = request.query_params.get("title", "")

        if title:
            job_post = JobPost.objects.filter(title_icontains=title)

        else:
            job_post = JobPost.objects.all()

        serializer = JobPostSerializer(job_post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    