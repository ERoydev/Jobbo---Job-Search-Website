# Generated by Django 4.2.6 on 2024-03-15 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0013_user_street'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(blank=True, upload_to='profile_pics/'),
        ),
    ]
