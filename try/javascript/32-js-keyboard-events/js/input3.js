window.onload = ()=>{
    //getting the static inputs which is the second row in products
    let productInput = document.querySelector('.product div:nth-child(1) input')
    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')

    //set keyup event for the static product name to focus in price input
    productInput.addEventListener('keyup',function (e) {
        if (e.which == 13) {
            priceInput.focus()
        }
        
    })
    //parseFloat() function parses a string and returns a floating point number.
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan,'price')
    // priceInput.addEventListener('keyup',function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan,price,quantity)
    // })
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan,'price')  
    // priceInput.addEventListener('change',function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan,price,quantity)
    // })
    setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan,'quantity')
    // quantityInput.addEventListener('keyup',function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan,price,quantity)
    // })
    setEvent('change',quantityInput,priceInput,quantityInput,resultSpan,'quantity')
    // quantityInput.addEventListener('change',function (e) {
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan,price,quantity)
    // })

    //get the new entry link
    let newProduct =document.querySelector('#newProduct')// set click event for new entery link.// prevent link click to jump to top of the page
    newProduct.addEventListener('click',function (e) {
        e.preventDefault()
        //get product name inputs for all rows inculding the static one //variable to check if any input is empty
        let productInputArr = document.querySelectorAll('.product div:nth-child(1) input')
        let check = true
        //iterate trough all  product name inputs
        productInputArr.forEach(element => {
            if (element.value.trim() == "") {
                check =false
                element.focus()
            }
            // check if product input is empty.//trim will remove space from both side//set the focus on the empty product input
        });
        //check is true that means no empty product
        if (check) {
           newProductCreator() 
        }

    })
    //get the table print link
    document.querySelector('#invoiceGenerate').addEventListener('click',function (e) {
        e.preventDefault()
        let productsArr = document.querySelectorAll('.products .product')
        let printTable = document.querySelector('#printTable tbody')
        printTable.innerHTML = ''
        document.querySelector('#printSection .sumTotal').innerText =''
        for (let i = 1; i < productsArr.length; i++){
            if (productsArr[i].children[0].children[0].value.trim() == '') {
                productsArr[i].children[0].children[0].focus()
                return
            }
           
        }
        for (let i = 1; i < productsArr.length; i++) {
            let newRow = document.createElement('tr')
            let productTd =document.createElement('td')
            productTd.innerText = productsArr[i].children[0].children[0].value 
            newRow.append(productTd)
            let priceTd = document.createElement('td')
            priceTd.innerText = productsArr[i].children[1].children[0].value +' Euro'
            newRow.append(priceTd)
            let quantityTd = document.createElement('td')
            quantityTd.innerText = productsArr[i].children[2].children[0].value
            newRow.append(quantityTd)
            let totalTd = document.createElement('td')
            totalTd.innerText = productsArr[i].children[3].children[0].innerText
            newRow.append(totalTd)
            printTable.append(newRow)
            
        }
        let sumTotal1 = document.querySelector('.sumTotal')
        document.querySelector('#printSection,sumTotal').innerText=sumTotal1.innerText

    })

}
// function calculator(resultEmenet,price,quantity) {
//     resultEmenet.innerText = price * quantity
// }

//set event function which will set the event for each input created static
//event name change or keyup
//triggerElement what is the element that will trigger the event
//priceElement is the priceinput
//quantityelement is the quanity input
//resultElement is the span for each row
//elementType price or quantity to know which element trigger the event
function setEvent(eventName,triggerElement,priceElement,quantityElement,resultElement,elementType) {
    //set the event for the trigger element
    triggerElement.addEventListener(eventName,function (e) {
        let price = parseFloat(priceElement.value)// change price to decimal number
        let quanity = parseFloat(quantityElement.value)// change quantity to decimal number
        resultElement.innerText = (price * quanity) +'Euro'// calculate the total and add the word EUR after
        //querySelect return only the first founded element
        //querySelectAll return all elements match the selector
        //get all spans in all products rows because they contain the price for each product
        let spanArr = document.querySelectorAll('.product>div>span')
        let storage = 0 //the storage will save the total
        spanArr.forEach(element => {
            let innerValue = element.innerText.replace(' EUR','')
            let price = parseFloat(innerValue)
            storage += price
        });

        let sumtotalElement = document.querySelector('.sumTotal')
        sumtotalElement.innerText= storage +' Euro'

        //if the tiggger element was a price input and the event was keyup and the pressed key is enter it should focus on quantity input
        if (elementType == 'price'&& eventName == 'keyup') {
            if (e.which ==13) {
                quantityElement.focus()
            }
        }
        if (elementType == 'quantity'&& eventName == 'keyup') {
            if (e.which ==13) {
                //quantityElement.focus()

                //get product name input so father to father to child to child
                let productInput = priceElement.parentElement.parentElement.children[0].children[0]
                //get product row from price input so father to father
                let currentProduct = priceElement.parentElement.parentElement
                //get all products element from prooduct
                let products = currentProduct.parentElement
                let childrenArr=Array.from(products.children)//convert collection to array so we can use indexOf
                //console.log(childrenArr.indexOf(currentProduct))
                //console.log(childrenArr.length)

                //get how many product rows exist inculding the title product row
                let productsLength = childrenArr.Length
                //get the current product index
                let currentProductIndex = childrenArr.indexOf(currentProduct)
                //check if current product name is not empty
                if (productInput.value.trim() !='') {
                    // check if current product is the last product so we can create new row else we need to focus on the next row product name input
                    if (productsLength-1 == currentProductIndex) {
                        newProductCreator()
                    }else{
                       childrenArr[currentProductIndex + 1].children[0].children[0].focus()
                    }
                    
                }

            }
        }

    })
 
}

function newProductCreator() {
    let productDiv = document.createElement('div')
    productDiv.classList.add('product')
    //create first div which will contain the product name input
    let firstDiv = document.createElement('div')
    let newProductInput = document.createElement('input')
    newProductInput.type = 'text'
    firstDiv.append(newProductInput)
    productDiv.append(firstDiv)
    //create second div which will contain the product price input
    let secondDiv = document.createElement('div')
    let newPriceInput = document.createElement('input')
    newPriceInput.type = 'number'
    newPriceInput.setAttribute('min','0')
    newPriceInput.value = '0'
    secondDiv.append(newPriceInput)
    productDiv.append(secondDiv)
    //create third div which will contain the product quantity input
    let thirdDiv = document.createElement('div')
    let newquantityInput = document.createElement('input')
    newquantityInput.type = 'number'
    newquantityInput.setAttribute('min','0')
    newquantityInput.value = '0'
    thirdDiv.append(newquantityInput)
    productDiv.append(thirdDiv)
    //create third div which will contain the product price input
    let fourthDiv = document.createElement('div')
    let newResultSpan = document.createElement('span')
    newResultSpan.innerText = '0 Euro'
    fourthDiv.append(newResultSpan)
    productDiv.append(fourthDiv)
    //get the div which contains all products
    let productsDiv = document.querySelector('.products')
    productsDiv.append(productDiv)

    //set events for all new input price and quantity
    setEvent('keyup',newPriceInput,newPriceInput,newquantityInput,newResultSpan,'price')
    setEvent('change',newPriceInput,newPriceInput,newquantityInput,newResultSpan,'price')
    setEvent('keyup',newquantityInput,newPriceInput,newquantityInput,newResultSpan,'quantity')
    setEvent('change',newquantityInput,newPriceInput,newquantityInput,newResultSpan,'quantity')

    newProductInput.addEventListener('keyup',function (e) {
        if (e.which == 13) {
            newPriceInput.focus()
        }
    })
    newProductInput.focus()

}