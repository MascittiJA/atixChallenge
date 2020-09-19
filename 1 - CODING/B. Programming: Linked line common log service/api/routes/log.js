const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ 
        result: "GET OK!"
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        result: "POST OK",
        body: req.body
    });
})

module.exports = router;