from django.urls import path
from .views import index, register, diary_view, add_entry_view

urlpatterns = [
    path('', index, name='index'),
    path('register/', register, name='register'),
    path('diary/', diary_view, name='diary_view'),
    path('entry/add/', add_entry_view, name='add_entry_view'),
]
