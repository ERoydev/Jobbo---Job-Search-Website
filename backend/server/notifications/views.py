from django.shortcuts import render
from .models import Notifications
from .serializers import NotificationSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
# Create your views here.

class NotificationsView(APIView):
    def get(self, request, id):
        notifications = Notifications.objects.all()

        if len(notifications) == 0:
            return Response({"no notifications"}, status=status.HTTP_204_NO_CONTENT)
        
        else:
            serializer = NotificationSerializer(notifications, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, id):
        serializer = NotificationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        try:
            notification = Notifications.objects.get(pk=id)
            notification.delete()
            return Response({'message': 'Notification deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        
        except Notifications.DoesNotExist:
            return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)
