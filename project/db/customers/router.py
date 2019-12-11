from customers.viewsets import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user',UserViewSet, base_name='user')

#for url in router.urls:
    #print(url, '\n')
