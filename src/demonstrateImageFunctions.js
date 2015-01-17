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
    var image = context.createImageData(220,400);
    var callback = function(pixelData) {
        var grayscale = ImageUtil.grayscale(pixelData)
        ImageUtil.populateCanvasImageData(pixelData, image.data)
        context.putImageData(image, 0, 0)
    };
    ImageUtil.loadImage('data/img_the_scream.jpg', 220, 400, callback)
};