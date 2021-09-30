from django.shortcuts import render
from rest_framework.generics import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Device, Gamer, RentedDevice
from .serializers import *


def homepage(request):
    return render(request, 'index.html')


class DeviceListApiView(ListAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
class DeviceCreateApiView(CreateAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
class DeviceUpdateApiView(UpdateAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
class DeviceDeleteApiView(DestroyAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


# @api_view(['POST'])
# def deviceCreate(request):
#     serializer = DeviceSerializer(data=request.data)
#
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)






class GamerListApiView(ListAPIView):
    queryset = Gamer.objects.all()
    serializer_class = GamerSerializer
class GamerCreateApiView(CreateAPIView):
    queryset = Gamer.objects.all()
    serializer_class = GamerSerializer


class RentedDeviceListApiView(ListAPIView):
    queryset = RentedDevice.objects.all()
    serializer_class = RentedDeviceSerializer
class RentedDeviceCreateApiView(CreateAPIView):
    queryset = RentedDevice.objects.all()
    serializer_class = RentedDeviceSerializer