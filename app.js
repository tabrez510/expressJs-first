// const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-products', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type ="text" name="title" placeholder="Title"><input type="number" name="size" placeholder="size"><button type="submit">Send</button></form>')
    next();
})
app.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<p>Helllo from express js</p>')
})

// const server = http.createServer(app);

app.listen(4000);