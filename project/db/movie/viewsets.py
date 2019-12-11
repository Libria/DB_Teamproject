from django.shortcuts import render,redirect,HttpResponse
from movie.serializers import MovieSerializer
from movie.serializers import Movie_theaterSerializer
from movie.serializers import Movie_theater1Serializer
from movie.serializers import Movie_scheduleSerializer
from movie.serializers import Movie_schedule1Serializer
from movie.serializers import SeatSerializer
from movie.serializers import Seat1Serializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from movie.models import Movie
from movie.models import Movie_theater
from movie.models import Movie_theater1
from movie.models import Movie_schedule
from movie.models import Movie_schedule1
from movie.models import Seat
from movie.models import Seat1

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class TheaterViewSet(viewsets.ModelViewSet):
    queryset = Movie_theater.objects.all()
    serializer_class = Movie_theaterSerializer
    
class Theater1ViewSet(viewsets.ModelViewSet):
    queryset = Movie_theater1.objects.all()
    serializer_class = Movie_theater1Serializer    

class TimeViewSet(viewsets.ModelViewSet):
    queryset = Movie_schedule.objects.all()
    serializer_class = Movie_scheduleSerializer
    
class Time1ViewSet(viewsets.ModelViewSet):
    queryset = Movie_schedule1.objects.all()
    serializer_class = Movie_schedule1Serializer    

class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer

class Seat1ViewSet(viewsets.ModelViewSet):
    queryset = Seat1.objects.all()
    serializer_class = Seat1Serializer
    

