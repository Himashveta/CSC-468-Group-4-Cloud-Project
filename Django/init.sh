#!/bin/bash

# Apply database migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --no-input

# Create superuser (optional)
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')" | python manage.py shell

# Start Django server
python manage.py runserver 0.0.0.0:8000
