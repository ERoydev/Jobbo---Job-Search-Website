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

class Categories(models.Model):
    name = models.CharField(max_length=200)
    job_count = models.IntegerField(default=0)

class Notifications(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification: {self.text[:20]} (to: {self.user.universal_name})"