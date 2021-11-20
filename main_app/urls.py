
from django.urls import path, include
from .views import IncomeViewSet, UserViewSet, IncomeList, IncomeDetails, income_list, income_details
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register('users', UserViewSet)



urlpatterns = [
    path('api/', include(router.urls)),


]