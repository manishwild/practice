//$(selector).method()
//alternative window.onload
$(document).ready(function () {
    //addevent to btn1
    $('#btn').click(function (e) { 
        e.preventDefault();
        $(".someDiv").toggle(500);
        // check btn content to set the right text
        if ($(this).text() == 'Hide') {
            $(this).text('Show');
        } else{
            $(this).text('Hide')
        }
    });
});