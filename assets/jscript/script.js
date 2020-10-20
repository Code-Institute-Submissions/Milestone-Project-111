$(document).ready(function(){
    // Nav menu toggle button's click to close function
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    })
    // Nav menu Active class
    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })
})