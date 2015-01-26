window.onload = function() {
    Caman('#demo-canvasThree', 'data/img_the_scream.jpg', function() {
        this.greyscale().invert().render();
    });
    Caman('#demo-canvasFour', 'data/img_the_scream.jpg', function() {
        this.render();
    });

    var canvas = document.getElementById('demo-canvas');
    var context = canvas.getContext('2d');
    var image = context.createImageData(220, 275);
    var callback = function(pixelData) {
        var grayscale = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
        ImageUtil.populateCanvasImageData(grayscale, image.data);
        context.putImageData(image, 0, 0)
    };
    ImageUtil.loadImage('data/img_the_scream.jpg', 220, 275, callback)
    
    var canvasTwo = document.getElementById('demo-canvasTwo');
    var contextTwo = canvasTwo.getContext('2d');
    var imageTwo = contextTwo.createImageData(220, 275);
    var callbackTwo = function(pixelData) {
        var grayscale = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
        var blurred = ImageUtil.gaussianBlur(grayscale, 3);
        ImageUtil.populateCanvasImageData(blurred, imageTwo.data);
        contextTwo.putImageData(imageTwo, 0, 0)
    };
    ImageUtil.loadImage('data/img_the_scream.jpg', 220, 275, callbackTwo)
};