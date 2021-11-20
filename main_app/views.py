
from .models import Income, Debt, Asset
from .serializers import IncomeSerializer, UserSerializer, DebtSerializer, AssetSerializer
from rest_framework import viewsets, status, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class IncomeViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
                     mixins.CreateModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin):

    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class IncomeViewSet(viewsets.ViewSet):

    def list(self, request):
        incomes = Income.objects.all()
        serializer = IncomeSerializer(incomes, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Income.objects.all()
        income = get_object_or_404(queryset, pk=pk)
        serializer = IncomeSerializer(Income)
        return Response(serializer.data)


    def update(self, request, pk):
        income = Income.objects.get(pk=pk)

        serializer = IncomeSerializer(Income, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk):
        income = Income.objects.get(pk=pk)
        income.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class IncomeList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)




class IncomeDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin):


    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)



class IncomeList(APIView):

    def get(self, request):
        incomes = Income.objects.all()
        serializer = IncomeSerializer(incomes, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class IncomeDetails(APIView):

    def get_object(self, id):
        try:
           return Income.objects.get(id = id)
        except Income.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)


    def get(self, request, id):
        income = self.get_object(id)
        serializer = IncomeSerializer(income)
        return Response(serializer.data)


    def put(self, request, id):
        income = self.get_object(id)
        serializer = IncomeSerializer(income, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, id):
        income = self.get_object(id)
        income.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def income_list(request):

    #get all incomes
    if request.method == 'GET':
        Incomes = Income.objects.all()
        serializer = IncomeSerializer(Incomes, many=True)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'PUT', 'DELETE'])
def income_details(request, pk):
    try:
        income = Income.objects.get(pk=pk)
    except Income.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = IncomeSerializer(Income)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = IncomeSerializer(Income, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Income.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class DebtViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
                     mixins.CreateModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin):

    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

class DebtViewSet(viewsets.ViewSet):

    def list(self, request):
        debts = Debt.objects.all()
        serializer = DebtSerializer(debts, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = DebtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Debt.objects.all()
        debt = get_object_or_404(queryset, pk=pk)
        serializer = DebtSerializer(Debt)
        return Response(serializer.data)


    def update(self, request, pk):
        debt = Debt.objects.get(pk=pk)

        serializer = DebtSerializer(Debt, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk):
        debt = Debt.objects.get(pk=pk)
        debt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class DebtList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)




class DebtDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin):


    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)



class DebtList(APIView):

    def get(self, request):
        debts = Debt.objects.all()
        serializer = DebtSerializer(debts, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = DebtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class DebtDetails(APIView):

    def get_object(self, id):
        try:
           return Debt.objects.get(id = id)
        except Debt.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)


    def get(self, request, id):
        debt = self.get_object(id)
        serializer = DebtSerializer(debt)
        return Response(serializer.data)


    def put(self, request, id):
        debt = self.get_object(id)
        serializer = DebtSerializer(debt, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, id):
        debt = self.get_object(id)
        debt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def debt_list(request):

    #get all debts
    if request.method == 'GET':
        Debts = Debt.objects.all()
        serializer = DebtSerializer(Debts, many=True)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = DebtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'PUT', 'DELETE'])
def debt_details(request, pk):
    try:
        debt = Debt.objects.get(pk=pk)
    except Debt.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DebtSerializer(Debt)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DebtSerializer(Debt, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Debt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    class assetViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
                     mixins.CreateModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin):

        queryset = Asset.objects.all()
        serializer_class = AssetSerializer

class AssetViewSet(viewsets.ViewSet):

    def list(self, request):
        assets = Asset.objects.all()
        serializer = AssetSerializer(assets, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AssetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Asset.objects.all()
        asset = get_object_or_404(queryset, pk=pk)
        serializer = AssetSerializer(Asset)
        return Response(serializer.data)


    def update(self, request, pk):
        asset = Asset.objects.get(pk=pk)

        serializer = AssetSerializer(Asset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk):
        asset = Asset.objects.get(pk=pk)
        asset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class AssetList(generics.GenericAPIView, mixins.ListModelMixin,
                  mixins.CreateModelMixin):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)




class AssetDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin):


    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)



class AssetList(APIView):

    def get(self, request):
        assets = Asset.objects.all()
        serializer = AssetSerializer(assets, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = AssetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class AssetDetails(APIView):

    def get_object(self, id):
        try:
           return Asset.objects.get(id = id)
        except Asset.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)


    def get(self, request, id):
        asset = self.get_object(id)
        serializer = AssetSerializer(asset)
        return Response(serializer.data)


    def put(self, request, id):
        asset = self.get_object(id)
        serializer = AssetSerializer(asset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, id):
        asset = self.get_object(id)
        asset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def asset_list(request):

    #get all assets
    if request.method == 'GET':
        Assets = Asset.objects.all()
        serializer = AssetSerializer(Assets, many=True)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = AssetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'PUT', 'DELETE'])
def asset_details(request, pk):
    try:
        asset = Asset.objects.get(pk=pk)
    except Asset.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AssetSerializer(Asset)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AssetSerializer(Asset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Asset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



