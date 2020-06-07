const express = require('express');
//import nodemailer
const emailSender = require('./modules/emailSender')
const app = express();

//use express urlencoder to get posted data
app.use(express.urlencoded({extended: true}));
//set the view engine type
app.use(express.static('./public'));
//set the view folder
app.set('view engine', 'ejs');
//set the public folder

app.set('views',__dirname + '/views');
app.get('/', (req, res) => {
    res.render('main')
});
app.get('/menu', (req, res) => {
    res.render('menu')
});
app.get('/contact', (req, res) => {
    
    res.render('contact')
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    emailSender.sendEmail(req.body.name,req.body.email,req.body.subject,req.body.message,(ok)=>{
        if (ok) {
            res.sendStatus(200)
        }else{
            res.sendStatus(500)
        }
    })
    
    
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});