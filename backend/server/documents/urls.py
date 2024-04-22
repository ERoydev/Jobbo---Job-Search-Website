from django.urls import path
from . import views

urlpatterns = [
    path("<int:userId>/", views.DocumentUploadView.as_view(), name="uploadDocument"),
    path("getDocument/<int:userId>/", views.DocumentGetView.as_view(), name="getDocument"),
]
