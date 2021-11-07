from django.shortcuts import render, redirect
from django.views import View
from django.views.generic.base import TemplateView
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from rest_framework import viewsets
from .models import Profile, CashFlow
from .serializers import *







class Home(TemplateView):
    template_name="home.html"

@method_decorator(login_required, name='dispatch')
class Dashboard(TemplateView):
    template_name="dashboard.html"

class Login(View):
        # show a form to fill out
    def get(self, request):
        form = Auth()
        context = {"form": form}
        return render(request, "registration/signup.html", context)
    # on form submit validate the form and login the user.
    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("dashboard")
        else:
            context = {"form": form}
            return render(request, "registration/signup.html", context)
 

class Signup(View):
    # show a form to fill out
    def get(self, request):
        form = UserCreationForm()
        context = {"form": form}
        return render(request, "registration/signup.html", context)
    # on form submit validate the form and login the user.
    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("dashboard")
        else:
            context = {"form": form}
            return render(request, "registration/signup.html", context)



class CashFlowView(viewsets.ModelViewSet):
    serializer_class = CashFlowSerializer
    queryset = CashFlow.objects.all()