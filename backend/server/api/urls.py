from django.urls import path
from . import views

urlpatterns = [
    path("jobposts/", views.JobPostListCreate.as_view(), name="jobposts"),
    path("jobposts/<int:pk>/", views.JobPostRetrieveUpdateDestroy.as_view(), name="update")

]
