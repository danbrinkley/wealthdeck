from rest_framework import viewsets
from .models import Income, Debt, Asset
from main_app.serializers import IncomeSerializer, DebtSerializer, AssetSerializer

class IncomeViewSet(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer

    def get_queryset(self):
        return Income.objects.all()
    
class DebtViewSet(viewsets.ModelViewSet):
    serializer_class = DebtSerializer

    def get_queryset(self):
        return Debt.objects.all()
    
class AssetViewSet(viewsets.ModelViewSet):
    serializer_class = AssetSerializer

    def get_queryset(self):
        return Asset.objects.all()