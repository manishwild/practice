let x = new Date()
document.write(typeof(x)+'<br>')
document.write(x +'<br>')

let y = new Date(2012,0,6)
document.write(y + '<br>')

document.write(y.getFullYear() + '<br>')
document.write(y.getMonth()+'<br>')
document.write(y.getDate()+'<br>')
document.write(y.getDay()+'<br>')
document.write(Date.now()+'<br>')

let date1 = new Date('01,01,2019')
document.write(date1+'<br>')

let date2 = new Date('01,03,2018')
document.write(date2 +'<br>')
document.write((date2 - date1)/1000/60/60/24 +'<br>')

let myBirthdate = new Date ('02,18,1986')
let currentDate = Date.now()
let diffrence = currentDate -myBirthdate
document.write(diffrence/1000/60/60/24/365 +'<br>')