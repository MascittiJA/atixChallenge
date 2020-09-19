const express = require('express');
const logger = require('morgan');
const app = express();

const  logRouter = require('./routes/log');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes 
app.use('/log', logRouter);

// 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

module.exports = app;
