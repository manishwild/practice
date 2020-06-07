const express = require('express')

const app = express()
//set the body parser middleware
app.use(express.urlencoded({ extended:true}));

//route the "/" root of domain
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/home.html')
});
app.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.userName == 'user1' && req.body.password == '1234') {
        res.send('Login success')
    }else{
        res.send('login Failed')
    }
});
app.get('/contact', (req, res) => {
    res.send('contact me');
});
app.get('/test', (req, res) => {
    console.log(req);
    
    res.json('test')
});

app.listen(4000, () => {
    console.log('App listening on port 4000!');
});