# Use the official MySQL image
FROM mysql/mysql-server:latest

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD=password

# Set up a database called DiaryDB
ENV MYSQL_DATABASE=DiaryDB

# COPY the SQL script to initialize the database
COPY create-table.sql /docker-entrypoint-initdb.d/

# Grant necessary privileges to root user
RUN echo "GRANT ALL PRIVILEGES ON DiaryDB.* TO 'root'@'%' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/grant_permissions.sql
