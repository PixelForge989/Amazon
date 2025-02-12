const express = require('express');
const router = express.Router();

// User registration route
router.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered');
});

// User login route
router.post('/login', (req, res) => {
    // Login logic here
    res.send('User logged in');
});

module.exports = router;
