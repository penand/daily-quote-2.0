const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

// Getting all quotes
router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Getting one
router.get('/:id', (req, res) => {
    // req.params.id
    res.send(req.params.id);
});

// Creating
router.post('/', async (req, res) => {
    const quote = new Quote({
        author: req.body.author,
        category: req.body.category,
        title: req.body.title,
        image_url: req.body.image_url,
        used: req.body.used,
    });

    try {
        const newQuote = await quote.save();
        res.status(201).json(newQuote);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
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