require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const quotesRouter = require('./routes/quotes');
app.use('/quotes', quotesRouter);

app.listen(port, () => console.log('Server Started'));