from django.urls import path
from jobs import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('jobs/', views.jobs_list),
    path('jobs/<int:id>', views.job_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)