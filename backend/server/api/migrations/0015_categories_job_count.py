# Generated by Django 4.2.6 on 2024-04-03 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_remove_categories_jobs_alter_jobpost_job_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='categories',
            name='job_count',
            field=models.IntegerField(default=0),
        ),
    ]