const fs = require('fs')

function SaveContent(content,path) {
    //fs.writeFileSync(path,content)
    fs.appendFileSync(path,content)
    // another way to save multiple file
    // let oldData = fs.readFileSync(path)
    // let newData = oldData + content
    // fs.writeFileSync(path,newData)
}
module.exports = {
    SaveContent
}