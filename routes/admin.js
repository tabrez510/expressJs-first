const express = require('express');

const path = require('path');

const router = express.Router();

const rootDirectory = require('../util/path');


// /admin/add-products
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'))
    // next();
})

//  /admin/products
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;