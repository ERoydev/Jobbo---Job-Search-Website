# Generated by Django 5.0.3 on 2024-03-08 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone_number', models.CharField(blank=True, max_length=12)),
                ('role', models.PositiveSmallIntegerField(blank=True, choices=[(1, 'Employee'), (2, 'Employer')], null=True)),
                ('data_joined', models.DateTimeField(auto_now_add=True)),
                ('last_login', models.DateTimeField(auto_now=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_img', models.ImageField(blank=True, null=True, upload_to='companies/post_picture')),
                ('job_title', models.CharField(max_length=255)),
                ('company_name', models.CharField(max_length=255)),
                ('job_category', models.CharField(max_length=255)),
                ('job_type', models.CharField(choices=[('Full_time', 'Full time'), ('Part_time', 'Part time'), ('Internship', 'Internship'), ('Temporary', 'Temporary'), ('For_students', 'For students'), ('Flexible', 'Flexible')], default='Full Time', max_length=30)),
                ('job_employment_type', models.CharField(choices=[('Remote_only', 'Remote only'), ('Hybrid', 'Hybrid'), ('Office', 'Office /on Spot/')], default='Office', max_length=30)),
                ('job_country', models.CharField(max_length=255)),
                ('job_city', models.CharField(max_length=255)),
                ('job_salary', models.CharField(max_length=255)),
                ('company_overview', models.TextField(blank=True, default='none', null=True)),
                ('key_responsibilities', models.TextField(blank=True, default='none', null=True)),
                ('qualifications', models.TextField(blank=True, default='none', null=True)),
                ('preferred_skills', models.TextField(blank=True, default='none', null=True)),
                ('job_description', models.TextField(blank=True, default='none', null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
