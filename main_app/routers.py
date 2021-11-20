#./routers.py
from rest_framework import routers
from main_app.viewsets import IncomeViewSet, DebtViewSet, AssetViewSet


router = routers.SimpleRouter()
router.register(r'income', IncomeViewSet, basename='income')
router.register(r'debt', DebtViewSet, basename='debt')
router.register(r'asset', AssetViewSet, basename='asset')


