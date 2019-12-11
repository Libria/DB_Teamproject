from django.contrib import admin
from .models import Movie
from .models import Movie_theater
from .models import Movie_theater1
from .models import Movie_schedule
from .models import Movie_schedule1
from .models import Seat
from .models import Seat1


# Register your models here.

admin.site.register(Movie)
admin.site.register(Movie_theater)
admin.site.register(Movie_theater1)
admin.site.register(Movie_schedule)
admin.site.register(Movie_schedule1)
admin.site.register(Seat)
admin.site.register(Seat1)


