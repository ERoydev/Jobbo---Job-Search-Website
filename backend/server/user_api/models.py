from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

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
    EMPLOYEE = 1
    EMPLOYER = 2

    ROLE_CHOICE = (
        (EMPLOYEE, "Employee"),
        (EMPLOYER, "Employer"),
    )

    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=12, blank=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICE, blank=True, null=True)

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
    
    def get_role(self):
        if self.role == 1:
            user_role = "Employee"

        elif self.role == 2:
            user_role = "Employer"

        return user_role
