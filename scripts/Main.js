

$(document).on('click', 'a', function(event){
    if (!($(event.target).hasClass('footer--socialMedia-item'))){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    };
});