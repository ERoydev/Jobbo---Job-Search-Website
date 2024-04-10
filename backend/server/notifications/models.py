from django.db import models
from api.models import User


# Create your models here.

class Notifications(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification: {self.text[:20]} (to: {self.user.universal_name})"