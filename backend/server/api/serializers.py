from rest_framework import serializers
from .models import JobPost

class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = [
            "id", "job_title", "job_category", "job_type",
            "job_employment_type", "job_country", "job_city", "job_salary",
            "company_overview", "key_responsibilities", "qualifications", "preferred_skills",
            "job_description"
            ]