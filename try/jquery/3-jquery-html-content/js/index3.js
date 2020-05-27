$(document).ready(function () {
    
    //event from btn1
    $('#btn1').click(function (e) { 
        e.preventDefault();
        alert($(".someDiv").width() + ' X ' + $('.someDiv').height())
    });

    $('#btn2').click(function (e) { 
        e.preventDefault();
        alert($(".someDiv").innerWidth() + ' X ' + $('.someDiv').innerHeight())
    });
});