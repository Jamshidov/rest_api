from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('devices', views.DeviceViewSet, 'Device')

urlpatterns = [
    path('', include(router.urls), name='device_url'),
]


# urlpatterns = [
#     path('task-list/', views.device_list, name="task-list"),
#     path('task-detail/<str:pk>/', views.device_detail, name="task-detail"),
#     path('task-create/', views.device_create, name="task-create"),
#
#     path('task-update/<str:pk>/', views.device_update, name="task-update"),
#     path('task-delete/<str:pk>/', views.device_delete, name="task-delete"),
# ]