from rest_framework import serializers
from .models import JobPost, JobApplication, Categories


class JobPostSerializer(serializers.ModelSerializer):
    job_description = serializers.CharField(required=False)  # Adjust if needed

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
            "created_at",
            "applicants"
        ]

    # To save the exact way user typed the text
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['job_description'] = representation['job_description'].replace('- ', '-\n ')  # Adjust formatting as needed
        return representation
    


class JobAppliedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields= ["applied_at", "job_post_id", "user_id", "doc_id"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["id", "name", "job_count"]