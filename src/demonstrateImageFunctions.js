window.onload = function() {
    /*Caman('#demo-canvas', 'data/img_the_scream.jpg', function() {
        this.render();
    });
    Caman('#demo-canvasTwo', 'data/img_the_scream.jpg', function() {
        this.invert().render();
    })   
    Caman('#demo-canvasThree', 'data/img_the_scream.jpg', function() {
        this.greyscale().render();
    })
    Caman('#demo-canvasFour', 'data/img_the_scream.jpg', function() {
        this.greyscale().render();
    })*/
    
    
    var canvas = document.getElementById('demo-canvas')
    var context = canvas.getContext('2d')
    var image = context.createImageData(10,10);
    _.forEach(image.data, function(element, index) {
        image.data[index] = 100
    })
    context.putImageData(image, 0, 0)
};