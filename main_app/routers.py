#./routers.py
from rest_framework import routers
from main_app.viewsets import IncomeViewSet


router = routers.SimpleRouter()
router.register(r'income', IncomeViewSet, basename='income')


