
from .models import Income
from .serializers import IncomeSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User



class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer




# '''

# class incomeViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
#                      mixins.CreateModelMixin, mixins.RetrieveModelMixin,
#                      mixins.UpdateModelMixin, mixins.DestroyModelMixin):

#     queryset = income.objects.all()
#     serializer_class = incomeSerializer

# '''



# '''
# class incomeViewSet(viewsets.ViewSet):

#     def list(self, request):
#         incomes = income.objects.all()
#         serializer = incomeSerializer(incomes, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = incomeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def retrieve(self, request, pk=None):
#         queryset = income.objects.all()
#         income = get_object_or_404(queryset, pk=pk)
#         serializer = incomeSerializer(income)
#         return Response(serializer.data)


#     def update(self, request, pk):
#         income = income.objects.get(pk=pk)

#         serializer = incomeSerializer(income, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#     def destroy(self, request, pk):
#         income = income.objects.get(pk=pk)
#         income.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# '''
# '''

# class incomeList(generics.GenericAPIView, mixins.ListModelMixin,
#                   mixins.CreateModelMixin):
#     queryset = income.objects.all()
#     serializer_class = incomeSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)




# class incomeDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
#                     mixins.UpdateModelMixin,
#                     mixins.DestroyModelMixin):


#     queryset = income.objects.all()
#     serializer_class = incomeSerializer

#     lookup_field = 'id'

#     def get(self, request, id):
#         return self.retrieve(request, id=id)

#     def put(self, request, id):
#         return self.update(request, id=id)

#     def delete(self, request, id):
#         return self.destroy(request, id=id)



# '''
# '''

# class incomeList(APIView):

#     def get(self, request):
#         incomes = income.objects.all()
#         serializer = incomeSerializer(incomes, many=True)
#         return Response(serializer.data)


#     def post(self, request):
#         serializer = incomeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class incomeDetails(APIView):

#     def get_object(self, id):
#         try:
#            return income.objects.get(id = id)
#         except income.DoesNotExist:
#             return HttpResponse(status=status.HTTP_404_NOT_FOUND)


#     def get(self, request, id):
#         income = self.get_object(id)
#         serializer = incomeSerializer(income)
#         return Response(serializer.data)


#     def put(self, request, id):
#         income = self.get_object(id)
#         serializer = incomeSerializer(income, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#     def delete(self, request, id):
#         income = self.get_object(id)
#         income.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# '''
# '''

# @api_view(['GET', 'POST'])
# def income_list(request):

#     #get all incomes
#     if request.method == 'GET':
#         incomes = income.objects.all()
#         serializer = incomeSerializer(incomes, many=True)
#         return Response(serializer.data)


#     elif request.method == 'POST':
#         serializer = incomeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# @api_view(['GET', 'PUT', 'DELETE'])
# def income_details(request, pk):
#     try:
#         income = income.objects.get(pk=pk)
#     except income.DoesNotExist:
#         return HttpResponse(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = incomeSerializer(income)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = incomeSerializer(income, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         income.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# '''

















