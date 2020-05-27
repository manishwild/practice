$(document).ready(function () {
    // $.ajax({
    //     type: "method",//GET,POST,Update,etc
    //     url: "url",//the url ./data.json
    //     data: "data",//data to send
    //     dataType: "dataType",//data type json,text
    //     success: function (response) {
            
    //     }
    // });
    $.ajax({
        type: "GET",
        url: "./data.json",
        success: function (response) {
            console.log(response);
            
        },error: function (error) {
            console.log(error);
            
        }
    });


    let obj = {
        "requests":[
            {"indexName":"ikea","params":"query=chair&hitsPerPage=100&page=1"}
        ]
    };


    $.ajax({
        type: "POST",
        url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
        data: JSON.stringify(obj) ,
        dataType: "json",
        success: function (response) {
           console.log(response);
            let dataArr = response.results[0].hits
            let container = $('.container')
            dataArr.forEach(element => {
                let htmlString = '<div class="product">'+
                '<div>' + element.name + '</div>'+
                '<div>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                '</div>'+
                '<div>' + element.price + ' Euro</div>'+
                '<div>'+
                    '<img src="' + element.image + '" width="100" alt="">'+
                '</div>'+
            '</div>'
            //Important convert string to jquery dom element
            let htmlProduct = $(htmlString)
            // create Rating stars
            htmlProduct.find('div>span.gray').each((idx,star)=>{
                if (idx < element.rating) {
                    $(star).addClass('gold');
                    $(star).removeClass('gray');
                }
            })
            container.append(htmlProduct)
            });
        }
    });




});