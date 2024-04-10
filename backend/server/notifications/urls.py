from django.urls import path
from . import views

urlpatterns = [
    path("<int:id>/", views.NotificationsView.as_view(), name='notification'),
]