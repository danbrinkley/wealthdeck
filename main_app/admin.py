from django.contrib import admin
from .models import Income

# Register your models here.

admin.site.register(Income)


# @admin.register(Income)
class IncomeModel(admin.ModelAdmin):
    list_filter = ('date')
    list_display = ('date')
