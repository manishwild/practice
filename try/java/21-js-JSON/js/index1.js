let xhr = new XMLHttpRequest()
xhr.open('GET','https://api.chucknorris.io/jokes/random')
xhr.send()
xhr.onload = function () {
    if (xhr.status == 200) {
        console.log(xhr.response)
        let joke =JSON.parse(xhr.response)
        console.log(joke.value)
        document.write('<img src="'+joke.icon_url+'" >')

    } else {
        console.log('error number is : '+ xhr.status)
    }
}