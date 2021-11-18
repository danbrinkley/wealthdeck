
from django.urls import path, include
from .views import IncomeViewSet, UserViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register('income', IncomeViewSet, basename='income')
router.register('users', UserViewSet)



urlpatterns = [
    path('api/', include(router.urls)),
    #path('income/', IncomeList.as_view()),
    #path('income/<int:id>/', IncomeDetails.as_view())
    #path('income/', Income_list),
    #path('income/<int:pk>/', Income_details),

]