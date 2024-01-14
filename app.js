const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('first middleware');
    res.send({ key1: 'value' })
    next();
})

app.use((req, res, next) => {
    console.log('second middleware');
})

// const server = http.createServer(app);

app.listen(4000);