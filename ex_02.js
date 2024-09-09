document.addEventListener('DOMContentLoaded', function() {

    let currentRotation = 0; 
  
    function rotateCircle(step) {
    
        let circle = document.getElementById('circle');
          currentRotation += step;
        circle.style.transform = 'rotate(' + currentRotation + 'deg)';
    }

    function resetRotation() {
        currentRotation = 0;
        let circle = document.getElementById('circle');
        circle.style.transform = 'rotate(0deg)';
    }
    document.getElementById('rotate-add-90').addEventListener('click', function() {
        rotateCircle(90);
    });

    document.getElementById('rotate-add-45').addEventListener('click', function() {
        rotateCircle(45);
    });

    document.getElementById('rotate-reset').addEventListener('click', function() {
        resetRotation();
    });

    document.getElementById('rotate-sub-45').addEventListener('click', function() {
        rotateCircle(-45);
    });

    document.getElementById('rotate-sub-90').addEventListener('click', function() {
        rotateCircle(-90);
    });

});
