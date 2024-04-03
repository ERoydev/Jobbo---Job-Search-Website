from django.dispatch import Signal
from .models import Categories
from django.db.models.signals import post_save, post_delete


job_created = Signal()
job_deleted = Signal()


def update_job_count_on_create(sender, instance, created, **kwargs):
    if created:
        category = instance.job_category 
        category.job_count += 1
        category.save()

def update_job_count_on_delete(sender, instance, **kwargs):
    try:
        category = instance.job_category  
        category.job_count -= 1
        category.save()
    except Categories.DoesNotExist:
        # Handle case where the category might have been deleted independently
        pass

post_save.connect(update_job_count_on_create, sender='api.JobPost')
post_delete.connect(update_job_count_on_delete, sender='api.JobPost')