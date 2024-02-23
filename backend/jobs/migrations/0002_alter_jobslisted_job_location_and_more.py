# Generated by Django 5.0.2 on 2024-02-23 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobslisted',
            name='job_location',
            field=models.CharField(choices=[('Remote only, anywhere', 'Remote only, anywhere'), ('Hybrid', 'Hybrid'), ('Office', 'Office')], default='Office', max_length=30),
        ),
        migrations.AlterField(
            model_name='jobslisted',
            name='job_type',
            field=models.CharField(choices=[('Full time', 'Full time'), ('Part time', 'Part time'), ('Internship', 'Internship'), ('Temporary', 'Temporary'), ('For students', 'For students'), ('Flexible', 'Flexible')], default='Full time', max_length=30),
        ),
    ]
