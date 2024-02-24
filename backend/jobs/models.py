from django.db import models


class JobsListed(models.Model):
    JOB_TYPE_CHOICES = {
        'Full time': 'Full time',
        'Part time': 'Part time',
        'Internship': 'Internship',
        'Temporary': 'Temporary',
        'For students': 'For students',
        'Flexible': 'Flexible'
    }

    JOB_LOCATION_CHOICES = {
        'Remote only, anywhere': 'Remote only, anywhere',
        'Hybrid': 'Hybrid',
        'Office /on Spot/': 'Office /on Spot/',
    }

    company_img = models.ImageField(upload_to='companies/post_picture', blank=True, null=True)
    job_title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    job_category = models.CharField(max_length=255)

    job_type = models.CharField(max_length=30,
                                choices=JOB_TYPE_CHOICES,
                                default='Full time')
    
    job_employment_type = models.CharField(max_length=30,
                                    choices=JOB_LOCATION_CHOICES,
                                    default='Office')
    
    job_country = models.CharField(max_length=255)
    job_city = models.CharField(max_length=255)
    job_salary = models.CharField(max_length=255)

    company_overview = models.TextField(blank=True, null=True, default='none')
    key_responsibilities = models.TextField(blank=True, null=True, default='none')
    qualifications = models.TextField(blank=True, null=True, default='none')
    preferred_skills = models.TextField(blank=True, null=True, default='none')
    job_description = models.TextField(blank=True, null=True, default='none')


    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.company_name} - {self.job_title} - {self.created_at}'