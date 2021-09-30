from django.urls import path, include
from rest_framework import routers, renderers
from .views import *


urlpatterns = [
    path('', homepage, name='homepage'),

    path('api/v1/list-device/', DeviceListApiView.as_view()),
    path('api/v1/device-create/', DeviceCreateApiView.as_view()),
    path('api/v1/device-update/<int:pk>/', DeviceUpdateApiView.as_view()),
    path('api/v1/device-delete/<int:pk>/', DeviceDeleteApiView.as_view()),

    path('api/v1/list-gamer', GamerListApiView.as_view()),
    path('api/v1/gamer-create', GamerCreateApiView.as_view()),

    path('api/v1/list-rented-device', RentedDeviceListApiView.as_view()),
    path('api/v1/rented-device-create', RentedDeviceCreateApiView.as_view()),
]



