from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Customer(models.Model):
	c_id = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
	c_name = models.CharField(max_length=100,null=True,blank=True)
	c_rank = models.CharField(max_length=100,null=True,blank=True)
	c_address = models.CharField(max_length=300,null=True, blank=True)
	c_age = models.IntegerField(default=0,null=True, blank=True)
	def __str__(self):
                return self.c_id

