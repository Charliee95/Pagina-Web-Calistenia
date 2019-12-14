$(document).ready(function() {


    $('.menu-icon').on('click', function() {
        $('nav').slideToggle();
    })


})

function scroll(hash) {
    location.hash = "#" + hash;
}