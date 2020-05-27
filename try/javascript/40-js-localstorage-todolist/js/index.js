window.onload = function (){
    //get html elements
    let todoInput = this.document.querySelector('#todoInput')
    let addBtn = this.document.querySelector('#todoAddBtn')
    let todoList = this.document.querySelector('#todoList')
    //add click event listner to add btn
    let todoArray = []
    addBtn.addEventListener('click',function (e) {
        let todoValue = todoInput.value
        if (todoValue.trim() !='') {
            let listItem = document.createElement('li')
            listItem.innertext = todoValue
            todoList.append(listItem)
            todoArray.push(todoValue)
            let todoArrayJson = JSON.stringify(todoArray)
            localStorage.setItem('todolist',todoArrayJson)
        }else{
            alert('todo value is empty,please enter a to do Value')
        }
        todoInput.value = ''
    })
    let jsonObj = localStorage.getItem('todolist')
    if(jsonObj != null){
        let convertedArr =this.JSON.parse(jsonObj)
        convertedArr.forEach(element => {
            todoArray.push(element)
            let listItem=document.createElement('li')
            listItem.innerText = element
            todoList.append(listItem)
        });
    }
}