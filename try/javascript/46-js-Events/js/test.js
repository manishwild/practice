window.onload = ()=>{
    //get html element
    let input = document.querySelector('#test')
    input.addEventListener('blur',e=>{
        alert('You are not allowed to write there')
    })

}