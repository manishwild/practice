const express = require('express')

// require mongoose
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://bla_user:FpLBo3HYYIhfL1US@cluster0-rmrmn.mongodb.net/bla_db?retryWrites=true&w=majority'
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

function connect() {
    return new Promise((resolve, reject) =>{
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }
    })
}