# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libmariadb-dev-compat \
    libmariadb-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Set work directory
WORKDIR /code


# Install dependencies
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# Copy project
COPY . /code/

# List contents of /code directory
RUN ls -la /code/

# Expose port 8000 and start the Django server
EXPOSE 8000
CMD ["python", "/code/manage.py", "runserver", "0.0.0.0:8000"]
