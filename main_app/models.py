from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=500, blank=True, null=True)
    image = models.FileField(blank=True, null=True, upload_to='dashboard/')
   
    
    def __str__(self):
        return self.user.username

class Income(models.Model):
    cashflow = models.IntegerField(null=True)
    date = models.CharField( max_length=100, null=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="income")
    
    def __str__(self):
        return self.cashflow
    
class Debt(models.Model):
    balance = models.IntegerField(null=True)
    date = models.CharField(max_length=100, null=True)
    name = models.CharField(max_length=100, unique=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="debt")

    def __str__(self):
        return self.name

class Asset(models.Model):
    value = models.IntegerField(null=True)
    date = models.CharField(max_length=100, null=True)
    name = models.CharField(max_length=100, unique=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="asset")

    def __str__(self):
        return self.name
   

