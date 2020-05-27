window.onload = function () {
    //my data that should be shown in the table
    // tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/

    let myData = {
        "headings":['Product Name','Product Price','Quantity','Total'],
        "data": [
            ["keyboard","5","10","50 Euro"],
            ["mouse","5","10","50 Euro"],
            ["screen","50","10","500 Euro"]
        ]
    
    }
    let MyTable = document.querySelector('#blatable')
    let mydtataTable = new DataTable(MyTable,{data: myData,searchable:true})

    let productNameInput=document.querySelector('#productNameInput')
    let productpriceInput  = document.querySelector('#productpriceInput')
    let quantityInput=document.querySelector('#quantityInput')
    document.querySelector('#addRowbtn').addEventListener('click',function (e) {
        //add new row
        //mydataTable.rows().add(["headset"."10","15","150 Euro"])
        let totalPrice = parseFloat(productpriceInput.value) * parseFloat(quantityInput.value) +' Euro'
        mydtataTable.rows().add([productNameInput.value,productpriceInput.value,quantityInput.value,totalPrice])
        productNameInput.value = ''
        productpriceInput.value=''
        quantityInput.value =''
        //end add click event function scop
    })
//end onload scop
}