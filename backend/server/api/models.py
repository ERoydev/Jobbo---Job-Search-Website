from django.db import models
from user_api.models import User

class JobPost(models.Model):
    # company_img = models.ImageField(upload_to='companies/post_picture', blank=True, null=True)
    applicants = models.ManyToManyField(User, through='JobApplication', related_name='applied_jobs')
    ownerId = models.CharField(max_length=150, default='none')
    job_title = models.CharField(max_length=255)

    job_category = models.CharField(max_length=255)
    job_type = models.CharField(max_length=30)
    job_employment_type = models.CharField(max_length=30)
    
    job_country = models.CharField(max_length=255)
    job_city = models.CharField(max_length=255)
    job_street = models.CharField(max_length=255, default='none')

    job_salary = models.CharField(max_length=255)

    company_overview = models.TextField(blank=True, null=True, default='none')
    key_responsibilities = models.TextField(blank=True, null=True, default='none')
    qualifications = models.TextField(blank=True, null=True, default='none')
    preferred_skills = models.TextField(blank=True, null=True, default='none')
    job_description = models.TextField(blank=True, null=True, default='none')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.job_title} - {self.created_at}'


class JobApplication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job_post = models.ForeignKey(JobPost, on_delete=models.CASCADE)
    applied_at = models.DateTimeField(auto_now_add=True)  # Optional: Timestamp
    # ... other application-specific fields