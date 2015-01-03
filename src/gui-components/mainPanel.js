function MainPanel(panel, constraints) {
    panel.rectangles = [];

    panel.mouseDragStarted = function(event) {
        var rectangle = new Rectangle(event.x, event.y, event.x, event.y);
        panel.rectangles.push(rectangle);
        panel.rectangleInCreationIndex = _.indexOf(panel.rectangles, rectangle);
    };

    panel.mouseDragEnded = function(event) {
        if(panel.rectangles[panel.rectangleInCreationIndex] !== undefined) {
            var currentRect = panel.rectangles[panel.rectangleInCreationIndex].setSecondVertex([event.x, event.y]);
            panel.rectangleInCreationIndex = undefined;
        }
    };

    panel.mouseDragged = function(event) {

    };
    
    return panel;
}