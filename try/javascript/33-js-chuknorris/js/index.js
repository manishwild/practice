
let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        console.log(xhr.response)
        let Data = JSON.parse(xhr.response)
        let jokeImg = document.querySelector('#jokeImg')
    let jokeId = document.querySelector('#jokeId')
    let jokePar = document.querySelector('#jokePar')
    let jokeBtn =document.querySelector('#jokeBtn')
        //console.log(Data.created_at)
        //console.log(Data.value)
        //document.write('<img src= "'+Data.icon_url+'" >'+"<br>")
        //document.write('ID: '+Data.id+'<br>')
        //document.write('Joke: '+Data.value + '<br>')
        jokeImg.src =Data.icon_url
        jokeId.innerText = Data.id
        jokePar.innerText = Data.value
        

}else{
    console.log('Error Number is : '+ xhr.status)
}
}
