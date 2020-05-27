window.onload = function () {
    //joke()
    joke1()
    let jokeBtn = document.querySelector('#jokeBtn')
    jokeBtn.addEventListener('click',function () {
        //joke()
        joke1()
    })
}
async function joke1() {
    let img = document.querySelector('#jokeImg')
    let id = document.querySelector('#jokeId')
    let joke = document.querySelector('#jokePar')
    let url = 'https://api.chucknorris.io/jokes/random'
    let d = await fetch(url)
    if (d.status == 200) {
        let o = await d.json()
        console.log(o)
        img.src = o.icon_url
        id.innerText = o.id
        joke.innerText = o.value


    }else{
        joke.innerText = 'error with getting data'
    }

    
}

function joke() {
    let img = document.querySelector('#jokeImg')
    let id = document.querySelector('#jokeId')
    let joke = document.querySelector('#jokePar')
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(d=>{
        if (d.status == 200) {
            d.json().then(o =>{
                console.log()
                img.src = o.icon_url
                id.innerText = o.id
                joke.innerText = o.value
            }).catch(error =>{
                console.log(error)
            })
        }
    }).catch(error =>{
        console.log(error)
    })
    
}