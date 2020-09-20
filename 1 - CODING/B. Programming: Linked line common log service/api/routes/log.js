const express = require('express');
const router = express.Router();

const logService = require('../services/logService');

router.get('/', (req, res, next) => {
    const lastEntry = logService.getLastLog().split(',');
    res.status(200).json({ 
        result: "GET OK!",
        prevHash: lastEntry[0],
        message: lastEntry[1],
        nonce: lastEntry[2],
    });
});

router.post('/', (req,res,next) => {
    const newEntry = logService.newMessage(req.body.msg).split(',');
    res.status(201).json({
        result: "POST OK",
        prevHash: newEntry[0],
        message: newEntry[1],
        nonce: newEntry[2],
    });
})

module.exports = router;