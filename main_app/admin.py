from django.contrib import admin
from .models import Income, Debt, Asset

# Register your models here.

admin.site.register(Income)
admin.site.register(Debt)
admin.site.register(Asset)


# @admin.register(Income)
class IncomeModel(admin.ModelAdmin):
    list_filter = ('date')
    list_display = ('date')
