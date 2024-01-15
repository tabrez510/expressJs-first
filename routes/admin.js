const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended : false}));
// /admin/add-products
router.get('/add-products', (req, res, next) => {
    res.send('<form action="/admin/products" method="POST"><input type ="text" name="title" placeholder="Title"><input type="number" name="size" placeholder="size"><button type="submit">Send</button></form>')
    next();
})

//  /admin/products
router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;