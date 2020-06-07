const express = require('express')

const app = express()
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('hello i m base');
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});