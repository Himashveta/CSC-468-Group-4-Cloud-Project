# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    DJANGO_SETTINGS_MODULE=myproject.settings

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    nginx \
 && rm -rf /var/lib/apt/lists/*

# Install Django and other dependencies
RUN pip install --no-cache-dir django psycopg2-binary

# Copy project files
COPY . /app/

# Remove default NGINX configuration
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Run initialization script
CMD ["sh", "init.sh"]
