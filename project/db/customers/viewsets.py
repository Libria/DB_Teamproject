from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from customers.serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import JsonResponse

#class UserViewSet(viewsets.ViewSet):
    #def list(self,request):
        #queryset = User.objects.all()
        #serializer_class = UserSerializer(queryset, many=True)
        #return Response(serializer.data)



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['get'], detail=False)
    def newest(self,request):
        newest = self.get_queryset().order_by('date_joined').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def last(self,request):
        last_login = self.get_queryset().order_by('last_login').last()
        serializer = self.get_serializer_class()(last_login)
        return Response(serializer.data)
    

