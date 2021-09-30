from rest_framework import viewsets

from .serializers import *
from .models import *


class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()



