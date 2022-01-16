const mongoose = require('mongoose');

// id: number, author, category, title, image, used: boolean, created at
const quoteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
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

modules.exports = mongoose.model('Quote', quoteSchema);