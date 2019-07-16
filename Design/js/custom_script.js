// Menu scroll:
$(window).on('scroll', function() {
    if ($(window).width() >= 1024) {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    }
})

// Mobile menu:
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav").toggleClass("showing");
        $("nav .contacts").toggle();
        $("nav .menu").toggle();
        $("nav .social").toggle();
    });
});