const express = require('express')

const app = express()

//set view engine type
app.set('view engine', 'ejs');

//set the view folder
app.set('views',__dirname + '/views');


app.get('/', (req, res) => {
    //res.send('hello')
    let arr = ['banana','apple',"watermelon","mango"]
    res.render('main',{title:'try page',fruits:arr})
});
app.get('/contact', (req, res) => {
    res.render('main',{title:'contact us',fruits:[]})
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});