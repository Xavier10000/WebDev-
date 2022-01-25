$('#menu_button').click(function(){
    $('#list').slideToggle(200,function(){
        $('#list').addClass("after_resize")
        $('.navbar').addClass("after_resize")
        console.log("ul slide");
    });
});
window.addEventListener('resize', function (event) {
    if ($('body').outerWidth()>=800) {
    $('#list').css('display', 'flex');
    $('#menu_button').css('display', 'none');
    }
    if ($('body').outerWidth() < 800) {
    $('#list').css('display', 'none');
    $('#menu_button').css('display', 'flex');
    $('#menu_button').addClass("special");
    }
}, true);
