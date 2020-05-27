//create a local storage variable "name"
//and save some data inside it "Manish Shahi"
localStorage.setItem("name","manish shahi")
//log the local storage variable "name"
//if there is the stored data it will show the data else show the null
console.log(localStorage.getItem('name'))
//save data to be shown in the second page index 2
localStorage.setItem('countDate',new Date())