# Generated by Django 4.2.6 on 2024-04-03 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_categories_jobs_alter_jobpost_job_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categories',
            name='jobs',
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='job_category',
            field=models.CharField(max_length=255),
        ),
    ]