from django.db import models
from user_api.models import User

# Create your models here.
class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=255)
    file = models.FileField(upload_to='userDocuments/')  
    uploaded_at = models.DateTimeField(auto_now_add=True)