# Diary.com Project

Welcome to the Diary.com project repository! This repository contains the source code and documentation for our project, which aims to create a user-friendly web application for writing and managing personal diary entries securely.

## Overview

Diary.com is a web application designed to provide users with a platform to write, save, and manage personal diary entries. With a focus on simplicity and security, Diary.com offers features such as user authentication, encryption for sensitive entries, and intuitive web interface for seamless interaction.

## Project Structure

The project is organized into several key components:

1. **WebUI and Frontend Development**: The frontend of the application is developed using HTML, CSS, and JavaScript (Node.js). This includes login/signup pages, diary entry creation, and viewing functionalities.

2. **User Authentication**: User authentication is implemented using Django, providing a robust authentication system integrated with PostgreSQL database.

3. **Database Management**: The PostgreSQL database stores user information, diary entries, and associated metadata. Encryption is employed to ensure the security of sensitive user data.

4. **Backend Workers**: Flask backend workers facilitate communication between the frontend WebUI and the PostgreSQL database, handling requests and managing interactions.

5. **Kubernetes Deployment**: The project is deployed on Kubernetes for scalability, fault tolerance, and efficient resource utilization. YAML files define deployments and services for seamless application deployment.

## Usage

To set up and run the Diary.com application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install necessary dependencies for frontend (Node.js), backend (Flask), and database (PostgreSQL).
3. Configure database settings in the Django settings file and set up necessary migrations.
4. Run the frontend and backend servers.
5. Access the application through the provided URL.

## Contributions

We welcome contributions to Diary.com project! Whether it's bug fixes, feature enhancements, or documentation improvements, feel free to submit a pull request. 

Thank you for your interest in Diary.com! We hope you find the project useful and valuable.
