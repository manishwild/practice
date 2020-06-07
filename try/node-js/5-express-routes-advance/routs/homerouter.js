const express = require('express')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    res.send('welcome home from home router');
});
homeRouter.get('/subhome', (req, res) => {
    res.send('welcome to sub home')
});

module.exports = homeRouter