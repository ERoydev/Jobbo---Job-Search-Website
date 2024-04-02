from django.urls import path
from . import views

urlpatterns = [
    path("jobposts/", views.JobPostListCreate.as_view(), name="jobposts"),
    path("jobposts/<int:pk>/", views.GetJobWithUserID.as_view(), name="update"),
    path("jobposts/apply/<int:pk>/<int:id>/", views.ApplyToJobView.as_view(), name="apply"),
    path("jobposts/getjobs/<int:pk>/", views.ApplyToJobView.as_view(), name="getjobs")
]
