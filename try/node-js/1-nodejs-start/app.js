const http = require('http')
const fs = require('fs')
http
    .createServer((req, res) => {
        // res.writeHead(200,{'content-type':'text/plain'})//send plain text to server
        // res.end('how r u')
        // **************************************************************** */
        // res.writeHead(200,{'content-type':'text/html'})//send html let myHtml =
        // '<html>'+ '<head>'+ '<title> my first server page</title>'+ '</head>'+
        // '<body>'+ '<h2>text</h2>'+ '</body>'+ '</html>'; res.end(myHtml)
        // res.end('<h2>how r u<h2>')
        // *********************************************************** */
        // res.writeHead(200,{'content-type':'application/json'})//send json to server
        // let obj = {     name:'manish',     firstName:'shahi' }
        // res.end(JSON.stringify(obj))
        // ************************************************************** */
        // fs.readFile('views/index.html',(err,data)=>{     console.log(err)
        // res.end(data) }) sync way*******************************

        console.log(req.url);
        if (req.url == '/1') {
            res.writeHead(200, {'content-type': 'text/html'})
            let html = fs.readFileSync('views/index.html')
            res.end(html)
        } else {
            if (req.url == '/2') {
                res.writeHead(200, {'content-type': 'text/html'})
                let html1 = fs.readFileSync('views/index2.html')
                res.end(html1)
            } else if (req.url == '/css') {
                res.writeHead(200, {'content-type': 'text/css'})
                let css = fs.readFileSync('views/style.css')
                res.end(css)
            } else {
                res.writeHead(200, {'content-type': 'text/html'})
                res.end('404 no such a page')
            }
        }

    })
    .listen(4000) //portname