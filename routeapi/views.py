from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .models import *


class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


# @api_view(['GET'])
# def device_list(request):
#     device = Device.objects.all()
#     serializer = DeviceSerializer(device, many=True)
#     return Response(serializer.data)
#
#
# @api_view(['GET'])
# def device_detail(request, pk):
#     device = Device.objects.get(id=pk)
#     serializer = DeviceSerializer(device, many=False)
#     return Response(serializer.data)
#
#
# @api_view(['POST'])
# def device_create(request):
#     serializer = DeviceSerializer(data=request.data)
#
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)
#
#
# @api_view(['POST'])
# def device_update(request, pk):
#     device = Device.objects.get(id=pk)
#     serializer = DeviceSerializer(instance=device, data=request.data)
#
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)
#
#
# @api_view(['DELETE'])
# def device_delete(request, pk):
#     device = Device.objects.get(id=pk)
#     device.delete()
#
#     return Response('Item succsesfully delete!')
