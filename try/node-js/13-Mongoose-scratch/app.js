const express = require('express')

// require mongoose
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://bla_user:zaCkzIrpnsxHTShb@cluster0.wtcsm.mongodb.net/mongoose?retryWrites=true&w=majority'
const app = express()

// get schema object from mongoose

//const Schema = mongoose.Schema
const {Schema} = mongoose

// create users schema
const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

const Users = mongoose.model('users',userSchema)

app.get('/', (req, res) => {
    res.send('Welcome To Mongoose')
});

app.get('/connect', (req, res) => {
    //check if mongoose is already connected to database
    if (mongoose.connection.readystate === 1) {
        res.send('Already connected');
    } else {
        mongoose.connect(connectionString, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        }).then(() => {
            res.send('it is connected');
        }).catch(error =>{
            res.send(error);
        })
    }
});
//dont create multi database user
function connect() {
    return new Promise((resolve, reject) =>{
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true ,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}

app.get('/adduser', (req, res) => {
    connect().then(() =>{
        //create new user
        const newUser = new Users ({
            fname: 'preet',
            lname: 'shres',
            email: 'preet@preet.com',
            age: 6,
            active: true
        })
        newUser.save().then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error =>{
        res.send(error.message)
    })
});


app.get('/updateuser', (req, res) => {
    connect().then(() =>{
        Users.updateOne({_id:'5f2e79c9b22ec7037cfd6b79'},{
            age:7,
            $inc: {__v:1}
        }).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })

    }).catch(error => {
        res.send(error.message)
    })
});


app.get('/updateusers', (req, res) => {
    connect().then(() => {
        Users.updateMany({lname: 'shahi'},{
            fname: 'manis',
            $inc: {__v:1}
        }).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message);
        })

    }).catch(error => {
        res.send(error.message);
    })
});

app.get('/getuser', (req, res) => {
    connect().then(() =>{
        Users.findOne({email: 'manishwild@manish1.com'}).then(result =>{
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })

    }).catch(error =>{
        res.send(error.message);
    })
});


app.get('/getusers', (req, res) => {
    connect().then(() =>{
        Users.find().then(result =>{
            res.json(result)
        }).catch(error =>{
            res.send(error.message);
        })

    }).catch(error => {
        res.send(error.message);
    })
});







app.listen(3000, () => {
    console.log('App listening on port 3000!');
});