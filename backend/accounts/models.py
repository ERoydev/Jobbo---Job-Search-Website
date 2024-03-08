from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# Create your models here.

class UserManager(BaseUserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('You have not provided a valid e-mail address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)
    
class User(AbstractBaseUser):
    EMPLOYEE = 1
    EMPLOYER = 2

    ROLE_CHOICE = (
        (EMPLOYEE, "Employee"),
        (EMPLOYER, "Emloyer"),
    )

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    email = models.EmailField(max_length=100, unique=True)
    role=models.PositiveSmallIntegerField(choices=ROLE_CHOICE, blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    data_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'role']

    def __str__(self):
        return self.email
  
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True

    def __str__(self):
        return self.email

    def get_role(self):
        if self.role == 1:
            user_role = "Employee"

        elif self.role == 2:
            user_role = "Employer"
            return user_role
    
class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
  profile_picture = models.ImageField(upload_to='users/profile_pictures', blank=True, null=True)

  address = models.CharField(max_length=250, blank=True, null=True)
  country = models.CharField(max_length=15, blank=True, null=True)
  state = models.CharField(max_length=15, blank=True, null=True)
  city = models.CharField(max_length=15, blank=True, null=True)
  pin_code = models.CharField(max_length=6, blank=True, null=True)

  created_at = models.DateTimeField(auto_now_add=True)
  modified_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.user.email




