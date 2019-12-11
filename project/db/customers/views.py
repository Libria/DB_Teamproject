from django.shortcuts import render,redirect,HttpResponse
from customers.models import Customer
from django.contrib.auth.models import User
from django.contrib import auth

# Create your views here.
def signup(request):
        if request.method=="POST":
                if request.POST['password1']== request.POST['password2']:
                        user=User.objects.create_user(
                                username=request.POST['username'],password= request.POST['password1'])
                        auth.login(request,user,backend='django.contrib.auth.backends.ModelBackend')
                        return render(request, 'customers/home.html')
                return render(request,'customers/signup.html')
        return render(request,'customers/signup.html')


def login(request):
        if request.COOKIES.get('username') is not None:
                username = request.COOKIES.get('username')
                password = request.COOKIES.get('password')
                user = auth.authenticate(request, username=username, password=password)
                if user is not None:
                    auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
                    return render(request, 'customers/home.html')  
                else:
                    return render(request, 'customers/login.html')
        
        elif request.method == "POST":
                username = request.POST["username"]
                password = request.POST["password"]
                user = auth.authenticate(request, username=username, password=password)

                if user is not None:
                    auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
                    if request.POST.get("keep_login") == "TRUE":
                        response = render(request, 'customers/home.html')
                        response.set_cookie('username',username)
                        response.set_cookie('password',password)
                        return response
                    return render(request, 'customers/home.html')
                else:
                    return render(request, 'customers/login.html', {'error':'username or password is incorrect'})
        else:
                return render(request, 'customers/login.html')
        return render(request, 'customers/login.html') 

def logout(request):
        response = render(request, 'customers/home.html')
        response.delete_cookie('username')
        response.delete_cookie('password')
        auth.logout(request)
        return response

def home(request):
        return render(request, 'customers/home.html')
