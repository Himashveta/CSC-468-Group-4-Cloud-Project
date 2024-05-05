// Import necessary modules
const express = require('express');
const session = require('express-session');

// Create an instance of express
const app = express();
const port = 3000; // Default port or you can use process.env.PORT for dynamic port assignment

// Middleware for serving static files
app.use(express.static('public'));

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing application/json
app.use(express.json());

// Session management
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET is not set. Please set the environment variable.");
}
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if you are serving your pages over HTTPS
}));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Import routes from pages.js
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
