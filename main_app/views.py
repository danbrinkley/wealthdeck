from django.shortcuts import render
from django.views.generic.base import TemplateView
# Create your views here.


class Home(TemplateView):
    template_name="home.html"

class Dashboard(TemplateView):
    template_name="dashboard.html"

class Login(TemplateView):
    template_name="login.html"

class Signup(TemplateView):
    template_name="signup.html"