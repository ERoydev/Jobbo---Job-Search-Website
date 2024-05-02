from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import JobPost, JobApplication, Categories
from documents.models import Document

from user_api.models import User
from .serializers import JobPostSerializer, JobAppliedUserSerializer, CategorySerializer

from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny

from django.db.models import Q

class JobPostListCreate(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        filters = Q()  

        search_term = self.request.query_params.get('search')
        job_category = self.request.query_params.get('job_category')
        job_type = self.request.query_params.get('job_type')
        job_location = self.request.query_params.get('job_location')

        if search_term:
            filters |= Q(job_title__icontains=search_term) | Q(job_description__icontains=search_term)
            filters |= Q(job_title__startswith=search_term) | Q(job_description__startswith=search_term)
        if job_category:
            filters &= Q(job_category=job_category)
        if job_type:
            filters &= Q(job_type=job_type)

        if job_location:
            filters &= Q(job_location=job_location)

        queryset = queryset.filter(filters)  
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        if queryset.exists():
            return self.list(request, *args, **kwargs)
        else:
            return Response({'Not founded': 'There is no job with this search criteria!'})  

    def post(self, request):
        serializer = JobPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class GetJobWithUserID(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    lookup_field = "pk"
    

class ApplyToJobView(APIView):
    permission_classes = [AllowAny]  # Optional: Authentication

    def post(self, request, pk, id):
        try:
            job_post = JobPost.objects.get(pk=pk)
            user = User.objects.get(pk=id)

            if user.get_role() == 'employer':
                return Response({"error": "Employer cannot apply to jobs."})
            

            doc_id = request.data.get('doc_id', None)

            job_application = JobApplication.objects.create(
                user=user,
                job_post=job_post,
                doc_id=doc_id 
            )

            # For M2M relationship:
            job_post.applicants.add(user)
            job_post.save()
            return Response({"message": "Successfully applied to job"})
        except JobPost.DoesNotExist:
            return Response({"error": "Job post not found"}, status=404)
        except Exception as e:
            return Response({"error": "An error occurred"}, status=500)
        
    def get(self, request, pk):
        try:
            applied_jobs = JobApplication.objects.filter(user_id=pk)        
        except JobApplication.DoesNotExist:
            return Response({'error': 'User with that ID has not applied to any jobs'}, status=status.HTTP_404_NOT_FOUND)

        serializer = JobAppliedUserSerializer(applied_jobs, many=True)
        return Response(serializer.data)
    
class GetJobApplicationsById(APIView):
    
    def get(self, request, postId, userId):
        try:
            job_applied = JobApplication.objects.filter(job_post_id=postId)
            applied_user = job_applied.filter(user_id=userId)

            if len(applied_user) == 0:
                return Response([])
            
        except JobApplication.DoesNotExist:
            return Response([])

        serializer = JobAppliedUserSerializer(applied_user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GetCategories(APIView):
    def get(self, request):
        categories = Categories.objects.all()

        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    