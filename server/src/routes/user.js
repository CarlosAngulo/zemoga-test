const express = require('express');

const app = express();

const {
    index,
    signIn
} = require('../controllers/user');

app.get('/', index);

app.post('/', signIn)

module.exports = app;