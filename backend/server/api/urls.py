from django.urls import path
from . import views

urlpatterns = [
    path("jobposts/", views.JobPostListCreate.as_view(), name="jobposts")
]
