const express = require('express');
const router = express.Router();

// Route to handle the landing page
router.get('/', (req, res) => {
  res.render('index');
});

// Route to handle diary page
router.get('/diary', (req, res) => {
  // Here you can also fetch existing diary entries from the database
  res.render('diary');
});

// Route to handle writing new entry
router.get('/writing', (req, res) => {
  res.render('writing');
});

// Route to save a new entry (POST request)
router.post('/save-entry', (req, res) => {
  // Extract entry from req.body
  const { entryContent } = req.body;

  // Code to save entry to database

  // Redirect to diary page after saving
  res.redirect('/diary');
});

module.exports = router;
