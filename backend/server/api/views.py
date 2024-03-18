from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import JobPost
from .serializers import JobPostSerializer
from rest_framework.views import APIView

class JobPostListCreate(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer

    def get(self, request):
        all_jobs = JobPost.objects.all()
        return Response(all_jobs, status=status.HTTP_200_OK)
    
    def post(self, request):
        information = request.data
        print(information)
        return Response('finally')
    
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
    