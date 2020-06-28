const express = require('express');
const fileUpload = require('express-fileupload')
//import nodemailer
const emailSender = require('./modules/emailSender')

const fs = require('fs')
//import the adminRouiter
const adminRout = require('./routs/adminRoute')
const data = fs.readFileSync(__dirname + '/meals.json')
const meals = JSON.parse(data)
const app = express();
//set fileupload middelware
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

//use express urlencoder to get posted data
app.use(express.urlencoded({extended: false}));
//set the view engine type
app.use(express.static('./public'));
//set the view folder
app.set('view engine', 'ejs');
//set the public folder
app.set('views',__dirname + '/views');
app.get('/', (req, res) => {
    res.render('main')
});
app.use('/admin',adminRout.adminBurgerRouter(meals))
app.get('/menu', (req, res) => {
    res.render('menu',{meals: meals})
});
app.get('/contact', (req, res) => {
    
    res.render('contact',{sent:1})
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != "" && name.length < 100) {
        emailSender.sendEmail(name,email,subject,message,(ok)=>{
        if (ok) {
            res.sendStatus(200)
        }else{
            res.sendStatus(500)
        }
    })
    }
    
    
    
});
app.post('/contact1', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    if (name != "" && name.length < 100) {
       emailSender.sendEmail(name,email,subject,message,(ok)=>{
        if (ok) {
            //res.sendStatus(200)
            res.render('contact',{sent:2})
        }else{
            //res.sendStatus(500)
            res.render('contact',{sent:3})
        }
    }) 
    }
    
    
    
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});