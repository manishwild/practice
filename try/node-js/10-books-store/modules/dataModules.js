const fs = require('fs')


function registerUser(email,password) {
    //read user.json and convert it to the object
    return new Promise((resolve,reject)=>{
        const readData = fs.readFileSync('./user.json')
        const data = JSON.parse(readData)

        //check the user email is exist or not using es6 find array method
        const existUser = data.users.find(user =>user.email == email)
        if (existUser) {
            reject('exist')
        } else {
            data.users.push({
                id:data.newId,
                email:email,
                password:password
            })
            //increase the newId property for data to be used for next register user
            data.newId++
            //convert data to json and write in user.json
            fs.writeFileSync('./user.json',JSON.stringify(data))
            resolve()
        }
    })
}

module.exports = {
    registerUser
}