from django.db import models

# Create your models here.
class Movie(models.Model):
        mv_id = models.IntegerField(default=0,primary_key=True)
        mv_title = models.CharField(max_length=100,null=True,blank=True)
        mv_director = models.CharField(max_length=100,null=True,blank=True)
        mv_image = models.CharField(max_length=200,null=True,blank=True)
        mv_summary = models.TextField(null=True,blank=True)
        def __str__(self):
                return str(self.mv_id)        
class Seat(models.Model):
        Col = models.IntegerField(default=0)
        Row = models.IntegerField(default=0)
        Bookings = models.CharField(default='ava',max_length=100)
        class Meta:
                unique_together=(("Col","Row"),)
        def __str__(self):
                return str(self.Col)+str('*')+str(self.Row)
class Seat1(models.Model):
        Col = models.IntegerField(default=0)
        Row = models.IntegerField(default=0)
        Bookings = models.CharField(default='ava',max_length=100)
        class Meta:
                unique_together=(("Col","Row"),)
        def __str__(self):
                return str(self.Col)+str('*')+str(self.Row)

class Movie_theater(models.Model):
        mt_index = models.IntegerField(default=0,primary_key=True)
        mt_region = models.CharField(max_length=200,null=True,blank=True)
        mt_name = models.CharField(max_length=200,null=True,blank=True)
        mt_seat = models.ManyToManyField('Seat')
        def __str__(self):
                return str(self.mt_index)
class Movie_theater1(models.Model):
        mt_index = models.IntegerField(default=0,primary_key=True)
        mt_region = models.CharField(max_length=200,null=True,blank=True)
        mt_name = models.CharField(max_length=200,null=True,blank=True)
        mt_seat = models.ManyToManyField('Seat1')
        def __str__(self):
                return str(self.mt_index)        
class Movie_schedule(models.Model):
        ms_index = models.IntegerField(default=0,primary_key=True)
        ms_start = models.TimeField(null=True,blank=True)
        ms_end = models.TimeField(null=True,blank=True)
        ms_region = models.ForeignKey(Movie_theater, on_delete=models.CASCADE,null=True, blank=True)
        def __str__(self):
                return str(self.ms_index)
class Movie_schedule1(models.Model):
        ms_index = models.IntegerField(default=0,primary_key=True)
        ms_start = models.TimeField(null=True,blank=True)
        ms_end = models.TimeField(null=True,blank=True)
        ms_region = models.ForeignKey(Movie_theater1, on_delete=models.CASCADE,null=True, blank=True)
        def __str__(self):
                return str(self.ms_index)

