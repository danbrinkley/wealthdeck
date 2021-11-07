from rest_framework import serializers
from .models import CashFlow

class CashFlowSerializer(serializers.ModelSerializer):

    class Meta:
        model = CashFlow
        fields = ('id', 'month', 'income', 'date_created')