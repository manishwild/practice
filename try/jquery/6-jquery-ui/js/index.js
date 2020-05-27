$(document).ready(function () {
    
    $('.list').sortable({
        axis: "y", // allow movement axis
        cancel: ".unsortable", // prevent element with the selector to be sorted
        handle: "span",
        stop:function (event,ui) {
            if (checkO()) {
                alert('done')
            }
        }
    })

    //check order function
    function checkO() {
        let check = true
        $('.list>li>h2').each((index,element) => { 
            //console.log($(element.text()));
            if ((index + 1) != $(element).text()) {
                check = false
            }
             
        });
        return check
    }







});