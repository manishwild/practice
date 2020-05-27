window.onload = ()=>{
    let input = document.querySelector('#someInput')
    //keypress,keydown,keyup
    input.addEventListener('keypress',function (p) {
        console.log(p)
        //only capital letter are allowed to type
        let check =false
        if (p.which>=65 && p.which <=90) {
            check = true
        }
        if (p.which ==196 || p.which == 220) {
            check = true
        }
        // if((e.which >=65 && e.which <=90)||(e.which ==196 ||e.which ==220)){
        //     check = true
        // }shortcut
        if(!check){
            p.preventDefault()
        }
        
    })
}
