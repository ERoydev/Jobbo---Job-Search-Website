from rest_framework import serializers
from .models import JobPost


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
            "created_at"
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['job_description'] = representation['job_description'].replace('- ', '-\n ')  # Adjust formatting as needed
        return representation