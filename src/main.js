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

    function transform(point) {
        transformationFunctions[transformationType](point)
    }

    function getNearestPoint(mouseVect) {
        var allPoints = [];
        _.forEach(rectangles, function(rect) {
            allPoints.push(rect.getTopLeft())
            allPoints.push(rect.getBottomRight())
            allPoints.push(rect.getBottomLeft())
            allPoints.push(rect.getTopRight())
        })
        _.min(allPoints, function(rectangle) {
            
            
        })
    }

    var clickListener = function(event) {
        if(event['ctrlKey'] === true) {
            transform(getNearestPoint(new Vector([event.pageX, event.pageY])))
        } else {
            if (rectInCreation !== undefined) {
                rectInCreation.setBottomRight(event.pageX, event.pageY);
                rectangles.push(rectInCreation);
                rectInCreation = undefined;
            } else {
                rectInCreation = new Rectangle(event.pageX, event.pageY, event.pageX, event.pageY)
            }
            console.log(rectInCreation.getBottomLeftVector())
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
    
    var setTranslate = function() {
        transformationType = "translation"
    };
    translationButton.addEventListener("click", setTranslate);

    function draw() {
        context.clearRect(0,0,1024,768);
        _.forEach(rectangles, function(rect) {
            context.beginPath();
            context.moveTo(rect.getTopLeftVector().elements[0], rect.getTopLeftVector().elements[1]);
            context.lineTo(rect.getBottomLeftVector().elements[0], rect.getBottomLeftVector().elements[1]);
            context.lineTo(rect.getBottomRightVector().elements[0], rect.getBottomRightVector().elements[1]);
            context.lineTo(rect.getTopRightVector().elements[0], rect.getTopRightVector().elements[1]);
            context.closePath();
            context.stroke();
        });
    }
    

    setInterval(function() {
        draw();
    }, 1000/FPS)
};
