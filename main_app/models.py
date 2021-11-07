from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=500, blank=True, null=True)
    image = models.FileField(blank=True, null=True, upload_to='dashboard/')
   
    
    def __str__(self):
        return self.user.username   

class CashFlow(models.Model):
    income = models.CharField(max_length=100)
    date_created = models.DateTimeField( auto_now_add=True)
    profile = models.ForeignKey(Profile, on_delete = models.CASCADE, related_name="cashflow")