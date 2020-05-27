$(function () {
    

    let htmlString = '<div><p>Hello how r u <a herf = "#" >Click here</a></p></div><script>alert("i am inside html")</script>'
    let smallDom = $(htmlString)
    smallDom.find('a').eq(1).click(function (e) { 
        e.preventDefault();
        alert('hello')
    });
    let btn = document.createElement('button')
    //btn.innerText = 'button'
    $(btn).text('hi');
    $('#container').append(smallDom);
    $("#container").append(btn);
});