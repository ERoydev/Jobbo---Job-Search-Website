# Generated by Django 4.2.6 on 2024-04-18 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0002_remove_document_document_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='user',
            field=models.CharField(),
        ),
    ]
