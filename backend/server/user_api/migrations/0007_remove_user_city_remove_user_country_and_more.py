# Generated by Django 4.2.6 on 2024-03-14 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0006_remove_userprofile_city_remove_userprofile_country_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='city',
        ),
        migrations.RemoveField(
            model_name='user',
            name='country',
        ),
        migrations.RemoveField(
            model_name='user',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='user',
            name='universal_name',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='phone_number',
            field=models.CharField(blank=True, max_length=12),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='universal_name',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
