const fs = require('fs')
const passwordHash = require('password-hash')
const { resolve } = require('path')

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
                password:passwordHash.generate(password)
            })
            //increase the newId property for data to be used for next register user
            data.newId++
            //convert data to json and write in user.json
            fs.writeFileSync('./user.json',JSON.stringify(data))
            resolve()
        }
    })
}
function addBook(bookTitle,bookDescription,bookpdf,bookImgs) {
    
    return new Promise((resolve,reject) =>{
        //read books.json
        const bookJson = fs.readFileSync('./books.json')
        //convertted the read file to object 
        const bookObj = JSON.parse(bookJson)
        const foundBook = bookObj.books.find((book) => book.title == bookTitle && book.userid == 1)

        if (foundBook) {
            reject(3)
        }else{
            //array will contain the url of image to be saved in the books.json
            const imgsArr = []
            //save the image in uploaded folder and set the new pattern
            bookImgs.forEach((img,idx) => {
                //get the file extension
                let ext = img.name.substr(img.name.lastIndexOf('.'))
                // set the new image name
                let newName = bookTitle.trim().replace( / /g,'_') + '_' + 1 + '_' + idx + ext
                img.mv('./public/uploaded/' + newName)
                imgsArr.push('/uploaded/' + newName)
            })
            //set a new pdf file name
            let pdfName = bookTitle.trim().replace(/ /g,'_') + '_' + 1 + '.pdf'
            //move the pdf file with the new name to upload folder
            bookpdf.mv('./public/uploaded/' + pdfName)
            // set the pdf url  that gonna be saved in json file
            let pdfNewUrl = '/uploaded/' + pdfName

            bookObj.books.push({
                id:bookObj,newid,
                title:bookTitle.trim(),
                description:bookDescription,
                imgs:imgsArr,
                pdfUrl:pdfNewUrl,
                userid:1
                
            })
            //increase the new id by one for the next book
            bookObj.newid++
            //save the bookObj to book.json
            fs.writeFileSync('./books.json',JSON.stringify(bookObj))
            resolve()
        }
    })
}

function getAllBooks() {
    return new Promise((resolve,reject) => {

        //read filess to json
        const bookJson = fs.readFileSync('./books.json')
        //converted the read file to object
        const bookObj = JSON.parse(bookJson)
        //export the object using resolve to be used
        resolve(bookObj.book)
    })
}

function getBook(id) {

    return new Promise((resolve, reject) =>{
        //read files to json
        const bookJson = fs.readFileSync('./books.json')
        //converted the read file to object
        const bookObj = JSON.parse(bookJson)
        // find a book with id[id]
        const foundBook = bookObj.books.find(book => book.id == id)

        if (foundBook) {
            resolve(foundBook)
        } else {
            reject(new Error('cannot find a book with this id ; ' + id))
        }

    })
    
}

function CheckUser(email, password) {
    //read user.json and convert it to object
    return new Promise((resolve, reject) =>{
        //read files to json
        const readData = fs.readFileSync('./user.json')
        //convert the read file to onject
        const data = JSON.parse(readData)
        //check user email exist or not using es6 find array method
        const matchUser = data.users.find(user => user.email == email)
    })
}

module.exports = {
    registerUser,
    addBook,
    getAllBooks
}