from django.http import JsonResponse
from .models import JobsListed
from .serializers import JobsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def jobs_list(request, format=None):
    """Get all job post, serialize them, return json"""

    if request.method == 'GET':
        jobs = JobsListed.objects.all()
        serializer = JobsSerializer(jobs, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    if request.method == 'POST':
        serializer = JobsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def job_detail(request, id, format=None):

    try:
        job = JobsListed.objects.get(pk=id)
    except JobsListed.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = JobsSerializer(job)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = JobsSerializer(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
