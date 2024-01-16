const express = require('express');

const path = require('path');

const router = express.Router();

const rootDirectory = require('../util/path');

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'contact-us.html'));
})

module.exports = router;