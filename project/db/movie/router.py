from movie.viewsets import MovieViewSet
from movie.viewsets import SeatViewSet
from movie.viewsets import Seat1ViewSet
from movie.viewsets import TheaterViewSet
from movie.viewsets import Theater1ViewSet
from movie.viewsets import TimeViewSet
from movie.viewsets import Time1ViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('movie',MovieViewSet, base_name='movie')
router.register('seat',SeatViewSet, base_name='seat')
router.register('seat1',Seat1ViewSet, base_name='seat1')
router.register('theater',TheaterViewSet, base_name='theater')
router.register('theater1',Theater1ViewSet, base_name='theater1')
router.register('time',TimeViewSet, base_name='time')
router.register('time1',Time1ViewSet, base_name='time1')

#for url in router.urls:
    #print(url, '\n')
