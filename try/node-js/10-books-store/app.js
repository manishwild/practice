const expresss = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')



const app = expresss()
app.use(expresss.static(__dirname + '/public'))
app.set('view engine' , 'ejs')
app.set('views',__dirname + '/views')
app.use(expresss.urlencoded({extended:false}))
app.use(expresss.json())
// create session object options
const sessionOptions = {
    secret: 'bookstore',
    resave: false,
saveUninitialized: true,
cookie: { secure: true } 
}
// use a session
app.use(session(sessionOptions))
//use cookie-parser
app.use(cookie())
//set the file-upload middleware
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))


app.get('/', (req, res) => {
    res.render('main')
});
app.get('/shop', (req, res) => {
    res.render('shop')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/faq', (req, res) => {
    res.render('faq')
});
app.get('/login', (req, res) => {
    res.render('login')
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});