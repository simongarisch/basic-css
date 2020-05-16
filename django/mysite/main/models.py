from django.db import models


# https://docs.djangoproject.com/en/3.0/ref/models/fields/
# python manage.py makemigrations
# python manage.py migrate
# python manage.py sqlmigrate main 0001

# python manage.py shell
# from main.models import Tutorial
# Tutorial.objects.all()  # empty for now
# from django.utils import timezone
# new_tutorial = Tutorial(tutorial_title="to be", tutorial_content="... or not to be", tutorial_published=timezone.now())
# new_tutorial.save()
# Tutorial.objects.all()  # got one...
# [t.tutorial_title for t in Tutorial.objects.all()]

class Tutorial(models.Model):
    tutorial_title = models.CharField(max_length=200)
    tutorial_content = models.TextField()
    tutorial_published = models.DateTimeField("date published")

    def __str__(self):
        return self.tutorial_title