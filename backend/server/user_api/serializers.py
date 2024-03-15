from rest_framework import serializers
from .models import User  

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) 

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        print(user)
        return user

    class Meta:
        model = User
        fields = ('email', 'password', 'role', 'country', 'city', 'phone_number', 'universal_name', 'street')  


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'country', 'city', 'phone_number', 'universal_name', 'street')