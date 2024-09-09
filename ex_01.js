document.addEventListener('DOMContentLoaded', function() {

    function reduceOpacity() {
        var element = document.getElementById("square");
        element.style.opacity = parseFloat(element.style.opacity) * 0.5;
    }

    function resetOpacity() {
        var element = document.getElementById("square");
        element.style.opacity = 1;
    }

    // Ajoute les événements sur le rectangle
    document.getElementById("square").addEventListener('mouseenter', reduceOpacity);
    document.getElementById("square").addEventListener('mouseleave', resetOpacity);

});
