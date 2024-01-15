const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<p>Helllo from express js</p>')
})

module.exports = router;