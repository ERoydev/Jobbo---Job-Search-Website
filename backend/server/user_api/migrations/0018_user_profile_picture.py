# Generated by Django 4.2.6 on 2024-04-18 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0017_remove_user_profile_picture'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to='profile_pictures/'),
        ),
    ]
