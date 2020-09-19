const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

module.exports = app;
