const express = require('express');

const path = require('path');

const router = express.Router();

const rootDirectory = require('../util/path');

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'success.html'));
})

module.exports = router;