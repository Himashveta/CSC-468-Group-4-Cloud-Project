# dashboard/views.py
from django.shortcuts import render, redirect
from .forms import UserRegistrationForm
from django.http import  HttpResponse

def index(request):
    usename = request.user
    password = request.user

    context = {
            'username' : username
            'password' : password
    }
    return render(request, 'index.html', context)


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to login page after successful registration
    else:
        form = UserRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})
