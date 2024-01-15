const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// for handling 404 page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page was not found!</h1>');
})

app.listen(4000);