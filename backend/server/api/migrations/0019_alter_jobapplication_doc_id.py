# Generated by Django 4.2.6 on 2024-04-24 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_jobapplication_doc_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapplication',
            name='doc_id',
            field=models.CharField(),
        ),
    ]
