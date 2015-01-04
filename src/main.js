window.onload = function() {
    var grid = document.getElementById("grid");
    var translationButton = document.getElementById("translationButton");
    var context = grid.getContext("2d");
    var rectangles = [];
    var rectInCreation;
    var FPS = 20;
    var transformationType;
    
    var clickListener = function(event) {
        if (rectInCreation !== undefined) {
            rectInCreation.setSecondVertex(event.pageX, event.pageY);
            rectangles.push(rectInCreation);
            rectInCreation = undefined;
        } else {
            rectInCreation = new Rectangle(event.pageX, event.pageY, event.pageX, event.pageY)
        }
    };
    
    grid.addEventListener("click", clickListener);
    translationButton.addEventListener("click", function() {
        transformationType = "translation"
    });

    function update() {
        

    }

    function draw() {
        context.clearRect(0,0,1024,768);
        _.forEach(rectangles, function(rect) {
            context.fillRect(rect.x(), rect.y(), rect.width(), rect.height())
        });
    }

    setInterval(function() {
        update();
        draw();
    }, 1000/FPS)
};
