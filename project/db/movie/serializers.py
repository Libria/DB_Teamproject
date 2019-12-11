from rest_framework import serializers
from movie.models import Movie
from movie.models import Movie_theater
from movie.models import Movie_theater1
from movie.models import Movie_schedule
from movie.models import Movie_schedule1
from movie.models import Seat
from movie.models import Seat1

class MovieSerializer(serializers.ModelSerializer):
        class Meta:
                model = Movie
                fields = '__all__'
                
class Movie_theaterSerializer(serializers.ModelSerializer):
        class Meta:
                model = Movie_theater
                fields =  '__all__'
class Movie_theater1Serializer(serializers.ModelSerializer):
        class Meta:
                model = Movie_theater1
                fields =  '__all__'
                
class Movie_scheduleSerializer(serializers.ModelSerializer):
        class Meta:
                model = Movie_schedule
                fields =  '__all__'
                
class Movie_schedule1Serializer(serializers.ModelSerializer):
        class Meta:
                model = Movie_schedule1
                fields =  '__all__'
                
class SeatSerializer(serializers.ModelSerializer):
        class Meta:
                model = Seat
                fields =  '__all__'
                
class Seat1Serializer(serializers.ModelSerializer):
        class Meta:
                model = Seat1
                fields =  '__all__'
