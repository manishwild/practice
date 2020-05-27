$(document).ready(function () {
    //click event btn
    $("#btn").click(function (e) { 
        e.preventDefault();
        $('#someDiv').animate({ 
            'left':'300px',
            'opacity':'0'
        },3000,function () {
            alert('done')
        })
    });
    // mouse move event for someDiv
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        //$('#someDiv).stop();
        $(this).stop();
    });
    //making a function to go box back
    let boxMove = function () {
        $('.container > div:nth-child(1)').animate({
            'left':'0'

        },2000,boxMoveBack)
    }
    let boxMoveBack = function () {
        $('.container > div:nth-child(1)').animate({
            'left':'350px'

        },2000,boxMove)
    }

    boxMoveBack()

    //chain methods jquery
    $('.chainDiv').animate({
        'height':'200px'
    },1000)
    .slideUp(2000)
    .text('hello i am here')
    .slideDown(1000)
    .fadeOut(1000,function () {
        alert('function done')
    });
});