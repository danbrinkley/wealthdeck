
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from main_app.routers import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include((router.urls, 'income'), namespace='income')),
    path('auth/', obtain_auth_token),
    


]