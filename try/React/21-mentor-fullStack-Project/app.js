const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const fs = require('fs');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html','utf-8');
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))