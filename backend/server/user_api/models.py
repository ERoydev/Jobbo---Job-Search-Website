from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

from django.db.models.signals import post_save
from django.dispatch import receiver



# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, null=True, blank=True)
    # profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

    phone_number = models.CharField(max_length=15, blank=True)
    universal_name = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length= 100, blank=True)    
    street = models.CharField(max_length=100, blank=True)

    data_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)


    is_admin = (models.BooleanField(default=False))
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Denotes staff user
    is_superuser = models.BooleanField(default=False)  # Denotes superuser

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email
    
    def get_id(self):
        return self.pk
