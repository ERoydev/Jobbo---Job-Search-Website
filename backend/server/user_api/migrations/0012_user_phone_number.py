# Generated by Django 4.2.6 on 2024-03-14 22:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0011_delete_userprofile_user_city_user_country_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
