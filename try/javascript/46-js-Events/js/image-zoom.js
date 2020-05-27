window.onload = e =>{ 
    //get html elements
    const container = document.querySelector('#container')
    const img = document.querySelector('#container>img')
    let zoom = 1
    //add event listener wheel to container
    container.addEventListener('mousewheel',function(e){
        console.log(e);
        if (e.deltaY > 0) {
            zoom += 0.1
        } else {
            if (zoom > 0.2) {
                zoom -= 0.1
            }
        }
        img.style.transform = `scale(${zoom})`
        //img.style.transform = 'scale('+zoom+')'


    })
}