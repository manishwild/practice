$(document).ready(function () {

    // get the parents
    $("#btn1").click(function (e) { 
        e.preventDefault();
        alert($("h2").parent().text())
    });

    // get the children
    $("#btn2").click(function (e) { 
        e.preventDefault();
        alert($("p").children().text())
    });
    // get the next element
    $("#btn3").click(function (e) { 
        e.preventDefault();
        alert($("h2").next().text())
    });
    // get the Previous element
    $("#btn4").click(function (e) { 
        e.preventDefault();
        alert($("p").prev().text())
    });
    //get parents
    $('#btn5').click(function (e) { 
        e.preventDefault();
        console.log($('span').parents())
        console.log($('span').parentsUntil())
    });
});