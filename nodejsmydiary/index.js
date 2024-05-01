const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session management with a mandatory environment variable for the secret
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET is not set. Please set the environment variable.");
}
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Only set to true if you are serving your pages over HTTPS
}));

// Import and use routes from pages.js
const pageRoutes = require('./routes/pages');
app.use('/', pageRoutes);

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
