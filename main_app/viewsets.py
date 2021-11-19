from rest_framework import viewsets
from .models import Income
from main_app.serializers import IncomeSerializer

class IncomeViewSet(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer

    def get_queryset(self):
        return Income.objects.all()