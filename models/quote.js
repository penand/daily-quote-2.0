const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    used: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Quote', quoteSchema);