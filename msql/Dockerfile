FROM mysql/mysql-server:latest

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD password

# Set up remote MySQL user
ENV MYSQL_USER Shveta
ENV MYSQL_PASSWORD password

# Set up a database called csc468
ENV MYSQL_DATABASE csc468

# COPY the csv file cattle_data.csv into container
COPY ./cattle_data.csv /var/lib/mysql-files/
COPY ./populate_data.sql /docker-entrypoint-initdb.d/

# COPY the MySQL custom config to enable local_infile
COPY ./my.cnf /etc/mysql/conf.d/

# Grant necessary privileges to user
RUN echo "GRANT ALL PRIVILEGES ON csc468.* TO 'Shveta'@'%' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/grant_permissions.sql
