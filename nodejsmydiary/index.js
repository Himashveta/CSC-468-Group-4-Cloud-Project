const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// Set up EJS for templating
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static('public'));

// Optional: Set up session management
app.use(session({
  secret: 'your_secret_key',  // Choose a secret string
  resave: false,
  saveUninitialized: true
}));

// Import and use routes from pages.js
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
