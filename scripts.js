// Declare head vars here for onload()
var head1 = [0,0];
var head2 = [0,0];
var head3 = [0,0];


(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var scrollMaxY, dot, eventDoc, doc, body, pageX, pageY, angle1, angle2, angle3;

        // IE-isms
        event = event || window.event;
        maxY = window.innerHeight || (document.documentElement.innerHeight - document.documentElement.clientHeight)

        // If pageX/Y aren't available and clientX/Y are,
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // TODO: Use x/y values to rotate heads
        angle1 = Math.atan2( event.pageY - head1[0], event.pageX - head1[1]);
        angle2 = Math.atan2( event.pageY - head2[0], event.pageX - head2[1]);
        angle3 = Math.atan2( event.pageY - head3[0], event.pageX - head3[1]);
        $("#woodsprite-head1").css("transform", "rotate(" + angle1 + "rad)");
        $("#woodsprite-head2").css("transform", "rotate(" + angle2 + "rad)");
        $("#woodsprite-head3").css("transform", "rotate(" + angle3 +"rad)");
    }
})();

$("#face").click(function () {
    // Reveal/hide heads
    $(".woodsprite-container").toggleClass("hidden");
    
    //get location of heads
    head1 = [$("#woodsprite-head1").offset().top + $("#woodsprite-head1").height() / 2, $("#woodsprite-head1").offset().left + $("#woodsprite-head1").width() / 2];
    head2 = [$("#woodsprite-head2").offset().top + $("#woodsprite-head2").height() / 2, $("#woodsprite-head2").offset().left + $("#woodsprite-head2").width() / 2];
    head3 = [$("#woodsprite-head3").offset().top + $("#woodsprite-head3").height() / 2, $("#woodsprite-head3").offset().left + $("#woodsprite-head3").width() / 2];
});
