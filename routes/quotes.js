const express = require('express');
const router = express.Router();


// Getting all quotes
router.get('/', (req, res) => {
    res.send('Hello world');
});

// Getting one
router.get('/:id', (req, res) => {
    // req.params.id
});

// Creating
router.post('/', (req, res) => {
    // req.params.id
});

// Updating
router.patch('/:id', (req, res) => {
    // req.params.id
});

// Deleting
router.delete('/:id', (req, res) => {
    // req.params.id
});


module.exports = router;