const express = require('express')

//import the homeRouter
const homeRout = require('./routs/homerouter')
const product = require('./routs/product')
const app = express()

// app.get('/home', (req, res) => {
//     res.send('welcome back')
// });
app.use('/home',homeRout);
app.use('/product',product);
app.listen(5000, () => {
    console.log('App listening on port 5000!');
});