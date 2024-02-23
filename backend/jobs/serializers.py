from rest_framework import serializers
from .models import JobsListed

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobsListed
        fields = ['id', 'job_title', 'company_name', 'job_category', 'job_type', 'job_employment_type', 'job_country', 'job_city', 'job_salary', 'company_overview', 'key_responsibilities',
                  'qualifications', 'preferred_skills', 'job_description', 'created_at']