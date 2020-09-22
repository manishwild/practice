const express = require('express')
const fs = require('fs')
const port = process.env.PORT || 4000
const session = require('express-session')
const fileupload = require('express-fileupload')

const dataModule = require('./modules/mongooseDataModule')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const sessionOptions = {
    secret: 'bookStore',
    cookie: {}
}
app.use(session(sessionOptions))





app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html' , 'utf-8')
    res.send(html);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
