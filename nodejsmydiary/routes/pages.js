const express = require('express');
const router = express.Router();

// Route for the main page
router.get('/', (req, res) => {
    res.render('index');
});

// Route for handling POST to /login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Hardcoded credentials for demonstration
    if (username === 'testuser' && password === 'password123') {
        res.redirect('/diary'); // Redirect to the diary page after successful login
    } else {
        res.render('index', { error: "Invalid username or password" }); // Show error on login page
    }
});

router.get('/diary', (req, res) => {
    res.render('diary');
});

router.get('/writing', (req, res) => {
    res.render('writing');
});

// Handle saving an entry temporarily
router.post('/save-entry', (req, res) => {
    const { entryTitle, entryContent } = req.body;
    console.log('Entry Title:', entryTitle);  // Log the title to the console
    console.log('Entry Content:', entryContent);  // Log the content to the console

    // Optionally store in the session for the duration of the session
    if (!req.session.entries) {
        req.session.entries = [];  // Initialize an array if it doesn't exist
    }
    req.session.entries.push({ title: entryTitle, content: entryContent });

    res.redirect('/diary');  // Redirect to the diary page or you can redirect back to the writing page
});
// Handle logout
router.post('/logout', (req, res) => {
    // Destroy the session and log out the user
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Failed to logout.");
        }
        res.redirect('/'); // Redirect to the home page or login page
    });
});


module.exports = router;
