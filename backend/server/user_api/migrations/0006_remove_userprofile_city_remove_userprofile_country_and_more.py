# Generated by Django 4.2.6 on 2024-03-14 21:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0005_alter_userprofile_address_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='city',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='country',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='email',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='role',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='universal_name',
        ),
    ]