const express = require('express');
const router = express.Router();

// Route for the main page
router.get('/', (req, res) => {
    res.render('index');
});

// Route for handling POST to /login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'testuser' && password === 'password123') {
        res.redirect('/diary'); // Redirect to the diary page after successful login
    } else {
        res.render('index', { error: "Invalid username or password" });
    }
});

router.get('/diary', (req, res) => {
    res.render('diary');
});

router.get('/writing', (req, res) => {
    res.render('writing');
});

// Handle POST to save an entry
router.post('/save-entry', (req, res) => {
    const { entryTitle, entryContent } = req.body;
    console.log('Entry Title:', entryTitle);  // Log the title for debugging
    console.log('Entry Content:', entryContent);  // Log the content for debugging
    res.redirect('/diary');  // Redirect back to the diary page
});

router.get('/account-info', (req, res) => {
    const userData = { username: 'User', email: 'user@example.com' }; // Example user data
    res.render('account-info', { user: userData });
});

router.get('/settings', (req, res) => {
    res.render('settings');
});

// Route for handling GET to /signup
router.get('/signup', (req, res) => {
    res.render('signup');  // Ensure you have a view called 'signup.ejs'
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Failed to logout.");
        }
        res.redirect('/');
    });
});

module.exports = router;
