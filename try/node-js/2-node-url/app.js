const http = require('http')
const fs = require('fs')
const url = require('url')

http
    .createServer(function (req, res) {
        console.log(req.url);

        let urlObj = url.parse(req.url, true)
        console.log(urlObj);
        switch (urlObj.pathname) {
            case '/home':
                // get shared content
                let sharedText = fs.readFileSync('views/shared.html')
                res.writeHead(200, {'content-type': 'text/html'})
                let html = fs.readFileSync('views/index.html')
                res.end(html.toString().replace('this is a shared content', sharedText))
                break;
            case '/about':
                // get shared content
                let sharedText1 = fs.readFileSync('views/shared.html')
                res.writeHead(200, {'content-type': 'text/html'})
                let about = fs.readFileSync('views/about.html')
                res.end(about.toString().replace('this is a shared content', sharedText1))
                break;
            case '/contact':
                if (urlObj.query.fname) {
                    console.log(urlObj.query.fname);
                    
                }
                // get shared content
                let sharedText2 = fs.readFileSync('views/shared.html')
                res.writeHead(200, {'content-type': 'text/html'})
                let contact = fs.readFileSync('views/contact.html')
                res.end(contact.toString().replace('this is a shared content', sharedText2))
                break;
            case '/css':
                res.writeHead(200, {'content-type': 'text/css'})
                res.end('body{background-color:blue}')
                break;
            case '/json':
                res.writeHead(200, {'content-type': 'application/json'})
                res.end("{'name':'Manish,'LastName':'Shahi'}")
                break;

            default:
                res.writeHead(404, {'content-type': 'text/html'})
                res.end("<h2>404 page is not found</h2>")
                break;
        }

    })
    .listen(5000)