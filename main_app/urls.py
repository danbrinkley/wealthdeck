from django.urls import path
from . import views


urlpatterns = [
    path('', views.Home.as_view(), name="home"),
    path('dashboard/', views.Dashboard.as_view(), name="dashboard"),
    path('registration/login/', views.Login.as_view(), name="login"),
    path('registration/signup/', views.Signup.as_view(), name="signup"),
]