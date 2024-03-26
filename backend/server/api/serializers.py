from rest_framework import serializers
from .models import JobPost


class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = [
            "id", 
            "ownerId", 
            "job_title", 
            "job_category", 
            "job_type",
            "job_employment_type", 
            "job_country", 
            "job_city", 
            "job_street", 
            "job_salary",
            "job_description", 
            "created_at"
        ]