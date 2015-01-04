window.onload = function() {
    var grid = document.getElementById("grid");
    var translationButton = document.getElementById("translationButton");
    var upButton = document.getElementById("upButton");
    var downButton = document.getElementById("downButton");
    var leftButton = document.getElementById("leftButton");
    var rightButton = document.getElementById("rightButton");
    var context = grid.getContext("2d");
    var rectangles = [];
    var transformationFunctions = [];
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
    
    transformationFunctions["translation"] = function() {
        
    };
    
    transformationFunctions["affine"] = function() {
        
    };

    transformationFunctions["rigid"] = function() {

    };

    transformationFunctions["similarity"] = function() {

    };

    transformationFunctions["perspective"] = function() {

    };
    
    var translate = function() {
        transformationType = "translation"
    };
    translationButton.addEventListener("click", translate);
    
    var up = function() {
        transformationFunctions[transformationType]();
    };
    upButton.addEventListener("click", up); 
    
    var down = function() {
        transformationFunctions[transformationType]();
    };
    downButton.addEventListener("click", down);
    
    var left = function() {
        transformationFunctions[transformationType]();
    };
    leftButton.addEventListener("click", left);
    
    var right = function() {
        transformationFunctions[transformationType]();
    };
    rightButton.addEventListener("click", right);

    function draw() {
        context.clearRect(0,0,1024,768);
        _.forEach(rectangles, function(rect) {
            context.fillRect(rect.x(), rect.y(), rect.width(), rect.height())
        });
    }

    setInterval(function() {
        draw();
    }, 1000/FPS)
};
