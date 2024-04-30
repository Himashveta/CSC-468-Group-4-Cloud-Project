#!/bin/bash

# Update package lists
sudo apt update

# Install Python and pip
sudo apt install -y python3 python3-pip

# Install Django
sudo pip3 install django

# Check Django version
django-admin --version

echo "Django installation complete."
