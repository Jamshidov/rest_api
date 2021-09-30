from rest_framework import serializers
from .models import *


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = '__all__'


class GamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamer
        fields = '__all__'


class RentedDeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentedDevice
        fields = '__all__'

