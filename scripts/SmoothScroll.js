var hashTagActive = "";
$(".scroll").on("click touchstart", function (event) {
    if (hashTagActive != this.hash) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 500, 'swing');
        hashTagActive = this.hash;
    }
});