$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll").offset().top
    }, 1000);
});