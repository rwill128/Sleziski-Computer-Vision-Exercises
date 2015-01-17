function getNearestPoint(polygons, mouseVect) {
    var allPoints = [];
    _.forEach(polygons, function(poly) {
        allPoints.push.apply(allPoints, poly.vectors)
    });
    return _.min(allPoints, function(vect) {
        var vectToMouse = mouseVect.subtract(vect);
        return vectToMouse.magnitude();
    });
}

window.onload = function() {
    var grid = document.getElementById("grid");
    var translationButton = document.getElementById("translationButton");
    var upButton = document.getElementById("upButton");
    var downButton = document.getElementById("downButton");
    var leftButton = document.getElementById("leftButton");
    var rightButton = document.getElementById("rightButton");
    //var context = grid.getContext("2d");
    var polygons = [];
    var transformationFunctions = [];
    var rectInCreation;
    var FPS = 20;

    var transformationType;

    function transform(point, mouseVect) {
        transformationFunctions[transformationType](point, mouseVect)
    }

    var clickCounter = 0;
    var clickListener = function(event) {
        if(event['ctrlKey'] === true) {
            var mouseVect = new Vector([event.pageX, event.pageY]);
            transform(getNearestPoint(polygons, mouseVect), mouseVect);
        } else {
            clickCounter = clickCounter + 1;
            if (rectInCreation === undefined) {
                rectInCreation = new Polygon([new Vector([event.pageX, event.pageY])]);
            } else {
                if (clickCounter > 4) {
                    polygons.push(rectInCreation);
                    rectInCreation = undefined;
                    clickCounter = 0;
                } else {
                    rectInCreation.vectors.push(new Vector([event.pageX, event.pageY]));
                }
            }
        }
    };
    //grid.addEventListener("click", clickListener);
    
    transformationFunctions["translation"] = function(point, mouse) {
        var difference = mouse.subtract(point);
        point.translate(difference);
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
    //translationButton.addEventListener("click", setTranslate);

    function draw() {
        context.clearRect(0,0,1024,768);
        _.forEach(polygons, function(poly) {
            context.beginPath();
            context.moveTo(poly.vectors[0].elements[0], poly.vectors[0].elements[1]);
            _.forEach(poly.vectors, function(vect) {
               context.lineTo(vect.elements[0], vect.elements[1])
            });
            context.closePath();
            context.stroke();
        });
    }
    

    setInterval(function() {
        draw();
    }, 1000/FPS)
};
