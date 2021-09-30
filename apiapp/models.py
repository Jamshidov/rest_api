from django.db import models


class Device(models.Model):
    DEVICE_TYPE_CHOICES = [
        ("PS3", "PlayStation 3"),
        ("PS4", "PlayStation 4"),
        ("PS5", "PlayStation 5"),
        ("XBOX", "Xbox gaming"),
    ]

    # device_type = models.CharField(max_length=5, choices=DEVICE_TYPE_CHOICES, default="PS3")
    device_type = models.CharField(max_length=100)
    device_name = models.CharField(max_length=100)
    price_hour = models.PositiveIntegerField()
    objects = models.Manager()

    def __str__(self):
        return self.device_name


class Gamer(models.Model):
    GAMER_STATUS_CHOICES = [
        ("bronze", "Bronze"),
        ("silver", "Silver"),
        ("gold", "Gold"),
        ("platinum", "Platinum"),
    ]

    gamer_status = models.CharField(max_length=9, choices=GAMER_STATUS_CHOICES, default="bronze")
    gamer_name = models.CharField(max_length=100)
    gamer_birth_date = models.DateField()
    objects = models.Manager()

    def __str__(self):
        return self.gamer_name


class RentedDevice(models.Model):
    rented_device = models.ForeignKey(Device, on_delete=models.CASCADE, null=True)
    gamer = models.ForeignKey(Gamer, on_delete=models.CASCADE, null=True)
    start_time = models.DateTimeField()
    finish_time = models.DateTimeField()
    objects = models.Manager()



