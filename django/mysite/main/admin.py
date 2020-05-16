from django.contrib import admin
from django.db import models
from .models import Tutorial
from tinymce.widgets import TinyMCE


class TutorialAdmin(admin.ModelAdmin):
    fields = [
        "tutorial_published",
        "tutorial_title",
        "tutorial_content",
    ]

    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }


# Register your models here.
admin.site.register(Tutorial, TutorialAdmin)
