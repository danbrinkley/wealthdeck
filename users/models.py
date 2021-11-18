

from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    email = models.EmailField(max_length=100, unique=True)
    user = models.CharField(max_length=100)
    
    def __str__(self):
        return self.email