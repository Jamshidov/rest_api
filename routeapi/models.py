from django.db import models


class Device(models.Model):
    DEVICE_TYPE_CHOICES = [
        ("PS3", "PlayStation 3"),
        ("PS4", "PlayStation 4"),
        ("PS5", "PlayStation 5"),
        ("XBOX", "Xbox gaming"),
    ]

    device_type = models.CharField(max_length=5, choices=DEVICE_TYPE_CHOICES, default="PS3")
    device_name = models.CharField(max_length=100)
    price_hour = models.PositiveIntegerField()
    objects = models.Manager()

    def __str__(self):
        return self.device_name
