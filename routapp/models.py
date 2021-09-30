from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()

    def __str__(self):
        return self.name
