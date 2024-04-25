# dashboard/views.py
from django.shortcuts import render, redirect
from .models import Entry
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required
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


def diary_view(request):
    entries = Entry.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'diary.html', {'entries': entries})

@login_required
def add_entry_view(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        entry = Entry(user=request.user, title=title, content=content)
        entry.save()
        return redirect('diary_view')
    return render(request, 'writing.html')
