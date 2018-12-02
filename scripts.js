(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var scrollMaxY, dot, eventDoc, doc, body, pageX, pageY;

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

        // use x/y coords to rotate image
        var angle = Math.atan2(maxY - event.pageY, event.pageX);
        $("#cat").css("transform", "rotate(" + angle * -0.8 +"rad)");
    }
})();
