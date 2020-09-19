const express = require('express');
const router = express.Router();

const logService = require('../services/logService');

router.get('/', (req, res, next) => {
    const lastEntry = logService.getLastLog();
    res.status(200).json({ 
        result: "GET OK!",
        lastEntry: lastEntry,
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        result: "POST OK",
        body: req.body
    });
})

module.exports = router;