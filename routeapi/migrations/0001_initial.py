# Generated by Django 3.2.6 on 2021-08-13 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('device_type', models.CharField(choices=[('PS3', 'PlayStation 3'), ('PS4', 'PlayStation 4'), ('PS5', 'PlayStation 5'), ('XBOX', 'Xbox gaming')], default='PS3', max_length=5)),
                ('device_name', models.CharField(max_length=100)),
                ('price_hour', models.PositiveIntegerField()),
            ],
        ),
    ]
