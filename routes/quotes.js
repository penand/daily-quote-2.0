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
router.get('/:id', getQuote, (req, res) => {
    res.json(res.quote);
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
router.patch('/:id', getQuote, (req, res) => {

});

// Deleting
router.delete('/:id', getQuote, async (req, res) => {
    try {
        await res.quote.remove();
        res.json({ message: 'Deleted quote' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


async function getQuote(req, res, next) {
    let quote;
    try {
        quote = await Quote.findById(req.params.id);
        if (quote === null){
            return res.status(404).json({ message: "Cannot find quote" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.quote = quote;
    next();
}

module.exports = router;