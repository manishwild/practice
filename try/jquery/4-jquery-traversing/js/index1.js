$(document).ready(function () {
    //click event for btn
    $('#btn').click(function (e) { 
        e.preventDefault();
        console.log($('#ul1').children());
    });

    //set the click event for all li children of ul1 not active
    $('#ul1').find('li:not(.active').click(function (e) { 
        e.preventDefault();
        alert('I am not active' + $(this).text()) 
    });

    //set the click event for li minside ul2 which has no active class
    $('#ul2 li').filter('li:not(.active)').click(function () { 
       alert('I am not active li' + $(this).text()) 
    })

    $('#ul1').find('li:not(.active').each(function (idx,element) { 
         console.log(idx,element);
         
    });

    //first():
    //last $('li).last()
    //eq() $('li).eq(3);return the fourth li
    //.not('.active')
});