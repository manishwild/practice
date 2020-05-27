window.onload =()=>{
    let input = document.querySelector('#input1')
     name(input)
}
function name(p) {
    p.addEventListener('keypress',function(e){
        if(e.which == 13){
            let container = document.querySelector('#container')
            let newInput = document.createElement('input')
            newInput.type = 'text'
            name(newInput) //important
            container.append(newInput)//append is a way to insert content to the end of already exisiting elements
            newInput.focus()
        }
    })
}