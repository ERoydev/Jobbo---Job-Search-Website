from django.db import models

# Create your models here.
class Document(models.Model):
    user = models.CharField()
    file = models.FileField(upload_to='userDocuments/')  
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)