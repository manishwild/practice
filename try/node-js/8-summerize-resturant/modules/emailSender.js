const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dummyyahoo11@gmail.com',
        pass: 'to093'
    }
})
function sendEmail(name,email,subject,message,callback) {
    const mailOption ={
    from: 'dummyyahoo11@gmail.com',
    to: 'manishwild1000@yahoo.com',
    subject:subject,
    text: email+ '\n' +name + '\n' + message
    }
    transporter.sendMail(mailOption, function (error, info) {
            if(error){
                console.log(error);
                callback(false)
                
            } else {
                console.log(info.response);
                callback(true)
            }
        })

}
module.exports = { sendEmail }