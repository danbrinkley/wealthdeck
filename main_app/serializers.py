from rest_framework import serializers
from .models import Income
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token



class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id', 'value', 'date']


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

# '''
# class ArticlIncomeizer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description = serializers.CharField()

#     # Create and return a new `Income` instance,
#     # given the validated data.
#     def create(self, validated_data):
#         return Income.objects.create(validated_data)

#     #Update and return an existing `Income` instance,
#     # given the validated data.

#     def update(self, instance, validated_data):
#         instance.value = validated_data.get('value', instance.value)
#         instance.date = validated_data.get('date', instance.date)
#         instance.save()
#         return instance
# '''