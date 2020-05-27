window.onload = ()=>{
    let btn = document.querySelector('#btn');
    //add onclick event to btn
    btn.onclick= (e) => {
        console.log(e);
        
    }
    //get the container element
    const container = document.querySelector('#container')
    //container on click
    container.onclick = (e)=>{
        console.log(e.clientX,e.clientY);
        
    }
    //add scroll event to container
    container.addEventListener('scroll',e=>{
        console.log(e.target.scrollTop);
        if (e.target.scrollTop > 400) {
            e.target.style.color = 'blue'
        } else {
            e.target.style.color = 'red'
        }
        //task1 onscroll change the font size of the content using scrollTop value check is scrollTop is grreater that 16
        if (e.target.scrollTop >16) {
            e.target.style.fontSize = e.target.scrollTop +'px'
        }
    })
}