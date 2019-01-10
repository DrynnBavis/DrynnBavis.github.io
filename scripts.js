// Global Kodama head co-ordinates
var head1 = [0,0];
var head2 = [0,0];
var head3 = [0,0];
var ignoreEvent = false;

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

        // Rotate Kodama heads to follow cursor
        angle1 = Math.atan2( event.pageY - head1[0], event.pageX - head1[1]);
        angle2 = Math.atan2( event.pageY - head2[0], event.pageX - head2[1]);
        angle3 = Math.atan2( event.pageY - head3[0], event.pageX - head3[1]);
        $("#kodama-head1").css("transform", "rotate(" + angle1 + "rad)");
        $("#kodama-head2").css("transform", "rotate(" + angle2 + "rad)");
        $("#kodama-head3").css("transform", "rotate(" + angle3 + "rad)");
    }
})();

// Rattle their heads when clicked
$("body").click(function(){
    // Only rattle if visible
    if ($(".kodama-container").hasClass("visible")){
        // ignore the click if it was face
        if(ignoreEvent){
            ignoreEvent = false;
        }
        else{
            // Pick a random Kodama
            var KodamaHead;
            var random = Math.random() * 3;
            if (random > 2){
                KodamaHead = $("#wrapper-head3");        
            }
            else if (random > 1){
                KodamaHead = $("#wrapper-head2");
            }
            else{
                KodamaHead = $("#wrapper-head1");
            }

            // Add animation
            KodamaHead.addClass("rattling");

            // Remove animation on completion
            KodamaHead.one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend",   
            function(e) {
                $(this).removeClass("rattling");
            });
        }
    }
});

// Toggle Kodama visibility with face click
$("#face").click(function () {
    // Reveal/hide heads
    $(".kodama-container").toggleClass("hidden"); 
    $(".kodama-container").toggleClass("visible");
    ignoreEvent = true;
    
    // Get location of heads
    head1 = [$("#kodama-head1").offset().top + $("#kodama-head1").height() / 2, $("#kodama-head1").offset().left + $("#kodama-head1").width() / 2];
    head2 = [$("#kodama-head2").offset().top + $("#kodama-head2").height() / 2, $("#kodama-head2").offset().left + $("#kodama-head2").width() / 2];
    head3 = [$("#kodama-head3").offset().top + $("#kodama-head3").height() / 2, $("#kodama-head3").offset().left + $("#kodama-head3").width() / 2];
});