const http = require('http')
const fs = require('fs')
const url = require('url')
//import nodeMailer
const nodeMailer = require('nodemailer')
// import our module
const saver = require('./modules/saver')

http
    .createServer((req, res) => {
        let urlObj = url.parse(req.url, true)

        switch (urlObj.pathname) {
            case '/home':
                res.writeHead(200, {'content-type': 'text/html'})
                let indexHtml = fs.readFileSync('views/index.html')
                res.end(indexHtml)
                break;
            case '/css':
                res.writeHead(200, {'content-type': 'text/css'})
                let css = fs.readFileSync('views/css/index.css')
                res.end(css)
                break;
            case '/image':
                res.writeHead(200, {'content-type': 'image/jpg'})
                let image = fs.readFileSync('views/img/hero.jpg')
                res.end(image)
                break;
            case '/image1':
                res.writeHead(200, {'content-type': 'image/png'})
                let image1 = fs.readFileSync('views/img/DCI-Digital-Career-Institute-Logo.png')
                res.end(image1)
                break;
            case '/contact':
                //saver.SaveContent('hello','content.txt')
                if (urlObj.query.fname) {
                    let massage = urlObj.query.fname + '\n' + urlObj.query.lname + '\n' + urlObj.query.email + '\n' + urlObj.query.message + '\n'
                    console.log(urlObj.query);
                    saver.SaveContent(massage,'content.txt')
                    //send email
                    const transporter = nodeMailer.createTransport({
                        service:'gmail',
                        auth:{
                            user:'manishwild1000@gmail.com',
                            pass:''
                        }
                    })
                    const mailOption = {
                        from:'manishwild1000@gmail.com',
                        to:'manishwild1000@yahoo.com',
                        subject:urlObj.query.email,
                        text:urlObj.query.fname + '\n' + urlObj.query.message
                    }
                    transporter.sendMail(mailOption,function (error,info) {
                        if (error) {
                            console.log(error);
                            
                        } else {
                            console.log('Email Sent: ' + info.response);
                            
                        }
                    })
                }
                res.writeHead(200, {'content-type': 'text/html'})
                let contact = fs.readFileSync('views/contact.html')
                res.end(contact)
                break;

            default:
                res.writeHead(404, {'content-type': 'text/html'})
                res.end('<h2>404 page not exist</h2>')
                break;
        }

    })
    .listen(4000)