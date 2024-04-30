from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('diary/', include('diaryapp.urls')),  # Including diaryapp's URLs under /diary/
]
