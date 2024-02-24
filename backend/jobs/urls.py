from django.urls import path
from jobs import views

urlpatterns = [
    path('jobs/', views.jobs_list),
    path('jobs/<int:id>', views.job_detail),
]
