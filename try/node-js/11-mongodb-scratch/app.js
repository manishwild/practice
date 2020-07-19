const express = require('express')
//destructuring mongodb
const { MongoClient,ObjectID } = require('mongodb')
const { response } = require('express')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine','ejs')
app.set('views','./views')


const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.wtcsm.mongodb.net/test1?retryWrites=true&w=majority'

app.get('/',(req,res) =>{
    res.send('Welcome to MongoDB')
})
app.get('/connect',(req,res) =>{
    MongoClient.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true}).then(client =>{
        console.log(client);
        res.send('connected')
        
    }).catch(error =>{
        console.log(error);
        res.send('could not connect')
    })
})

app.get('/adduser',(req,res) =>{
    MongoClient.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true}).then(client =>{
        // get the database
        const db = client.db('test1')
        //insert data to a collection
        db.collection('users').insertOne({
            title: 'some book',
            category: 'java'
        }).then(response => {
            console.log(response)
            res.send(response)
            client.close()
        }).catch(error =>{ 
            console.log(error);
            res.send(error)

            client.close()
    })
        
    }).catch(error =>{
        console.log(error);
        res.send('could not connect')
    })
})
app.get('/adduserasync', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').insertOne({
            email:'man@man.com',
            password:'java'
        })
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});
app.get('/insertmany', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
        const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').insertMany([
            {
            email:'man@.com',
            password:'1235456'
        },{
            email:'madzsdfs@n.com',
            password:'1235456'
        },{
            email:'trr@ma1n.com',
            password:'1235456'
        },{
            email:'mvcvcv@ma1n.com',
            password:'1236'
        }
    ])
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});


app.get('/getuser', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
        const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').find().toArray()
        console.log(response);
        
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});
app.get('/findone', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
           const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').findOne({_id:new ObjectID('5efdf2766d6e972178592b0b')})
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});

app.get('/updatemany', (req, res) => {
    //iife (async ()=>{ your code})() we should try catch we can find error
    (async()=>{
        try {
        const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        const db = client.db('test1')
        const response = await db.collection('users').updateMany({password:'1235456'},{$set:{email:'pre@preeti.com'}})
        client.close() 
        res.send(response);
        } catch (error) {
            res.send(error);
        }
        
        
    })()
});
app.get('/updateone', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db =  client.db('test1')
            const response = await db.collection('users').updateOne({_id:new ObjectID('5f0223a1a47f7c3078dd7612')},{
                $set:{email:'mas@man.com'}
            })
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error)
        }

    })()
});

app.get('/deletemany', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db =  client.db('test1')
            const response = await db.collection('users').deleteMany({password:'1235456'})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error)
        }

    })()
});
app.get('/deleteone', (req, res) => {
    (async()=>{
        try {
            const client = await MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
            const db =  client.db('test1')
            const response = await db.collection('users').deleteMany({_id:new ObjectID('5efdc85835d5ce1b0fd7849d')})
            client.close()
            res.send(response);
        } catch (error) {
            res.send(error)
        }

    })()
});
app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    // 1 register success
    // 2 server error
    // 3 user is already exist
    const username = req.body.username.trim()
    const password = req.body.password
    if (username && password) {
        (async() => {
            try {
                const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
                const db = client.db('test1')
                const response = await db.collection('users').findOne({email: username})

                if (response) {
                    client.close()
                    res.json(3)
                } else {
                    const insertResponse = await db.collection('users').insertOne({
                        email: username,
                        password: password
                    })
                    console.log(insertResponse);
                    if (insertResponse.result.ok) {
                        res.json(1)
                    } else {
                        res.json(2)
                    }
                }
            } catch (error) {
                res.json(2)
            }

        })()
    } else {
        res.json(2)
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});