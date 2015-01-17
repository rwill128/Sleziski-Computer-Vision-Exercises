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
    var image = context.createImageData(1,1);
    var data = image.data
    data[0] = 63;
    data[0] = 71;
    context.putImageData(image, 1, 1)
};