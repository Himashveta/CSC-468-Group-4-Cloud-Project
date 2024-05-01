const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'sql-server-service',  // Kubernetes service name
  user: 'root',  // Default root user
  password: 'password',  // As specified in your deployment
  database: 'DiaryDB',  // The database name
  port: 3306  // Ensure this is the correct port your SQL server is listeni>});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database with id ' + db.threadId);
});
