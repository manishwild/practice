const express = require('express')

const productRout = express.Router()

productRout.get('/', (req, res) => {
    res.send('i am product home')
});
productRout.get('/subproduct', (req, res) => {
    res.send('i am product home1')
});
productRout.get('/subproduct1', (req, res) => {
    res.send('i am product home2')
});
module.exports = productRout