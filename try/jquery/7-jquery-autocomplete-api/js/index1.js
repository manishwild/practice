$(document).ready(function () {
    
    $('#datePicker').datepicker()
    $('#btn').click(function (e) { 
        e.preventDefault();
        alert($( "#datePicker" ).val())
    });
});