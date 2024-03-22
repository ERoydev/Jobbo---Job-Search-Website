from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import JobPost
from .serializers import JobPostSerializer
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend

class JobPostListCreate(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            return self.list(request, *args, **kwargs)
        else:
            return Response("No items found", status=404)  

    def post(self, request):
        serializer = JobPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class JobPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    lookup_field = "pk"


class ApplyToJobView(APIView):
    permission_classes = [AllowAny]  # Optional: Authentication

    def post(self, request, job_post_id):
        try:
            job_post = JobPost.objects.get(pk=job_post_id)
            user = request.user  

            # For M2M relationship:
            job_post.applicants.add(user)

            job_post.save()
            return Response({"message": "Successfully applied to job"})
        except JobPost.DoesNotExist:
            return Response({"error": "Job post not found"}, status=404)
        except Exception as e:
            return Response({"error": "An error occurred"}, status=500)