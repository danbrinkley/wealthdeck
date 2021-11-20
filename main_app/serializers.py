from rest_framework import serializers
from .models import Income, Debt, Asset, Profile
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id', 'cashflow', 'date']  
        
class DebtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Debt
        fields = ['id', 'balance', 'date', 'name']  
        
class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ['id', 'value', 'date', 'name']  




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class IncomeSerializers(serializers.Serializer):
    value = serializers.CharField(max_length=100)
    date = serializers.CharField(max_length=30)


    def create(self, validated_data):
        return Income.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.value = validated_data.get('value', instance.value)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        return instance

class DebtSerializers(serializers.Serializer):
    balance = serializers.IntegerField()
    date = serializers.CharField()
    name = serializers.CharField(max_length=100)
    


    def create(self, validated_data):
        return Debt.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.value = validated_data.get('value', instance.value)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        return instance
    
    
class AssetSerializers(serializers.Serializer):
    value = serializers.IntegerField()
    date = serializers.CharField()
    name = serializers.CharField(max_length=100)
    


    def create(self, validated_data):
        return Debt.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.value = validated_data.get('value', instance.value)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        return instance

