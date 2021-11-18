from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Income(models.Model):
    value = models.CharField(max_length=100, null=True)
    date = models.CharField(max_length=30, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="income")

    def __str__(self):
        return self.date

   

