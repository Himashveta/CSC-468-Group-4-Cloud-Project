# Use official PostgreSQL image as base
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=writing_platform
ENV POSTGRES_USER=writing_user
ENV POSTGRES_PASSWORD=writing_password

# Copy initialization script
COPY init.sql /docker-entrypoint-initdb.d/
