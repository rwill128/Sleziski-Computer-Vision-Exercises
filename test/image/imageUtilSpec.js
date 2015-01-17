describe('The ImageUtil API', function() {
    it('should successfully load image data.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData[0][0]).toEqual([63, 71, 204, 255]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 1, 1, callback)
    });
    it('should successfully return one pixel grayscale image with one value at each pixel instead of an array.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData[0][0]).toEqual([63, 71, 204, 255]);
            var greyscaleData = ImageUtil.grayscale(pixelData);
            expect(greyscaleData[0][0]).toEqual(83.77);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 1, 1, callback)
    });
    it('should successfully return a 2*2 section of an image.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[[63, 71, 204, 255], [63, 71, 204, 255]],
                                        [[63, 71, 204, 255], [63, 71, 204, 255]]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    });
    it('should successfully turn a 2*2 section of an image into grayscale.', function(done) {
        var callback = function(pixelData) {
            var grayscaleData = ImageUtil.grayscale(pixelData);
            expect(grayscaleData).toEqual([[83.77, 83.77],
                                            [83.77, 83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    })
    it('should place my image data into a canvas image data object that I pass in.', function(done) {
        var callback = function(pixelData) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var image = context.createImageData(2, 2);
            ImageUtil.populateCanvasImageData(pixelData, image.data);
            expect(image.data[0]).toEqual(63)
            expect(image.data[1]).toEqual(71)
            expect(image.data[2]).toEqual(204)
            expect(image.data[3]).toEqual(255)
            done()
        }
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    })
    it('should place my greyscale image data into a canvas image data object that I pass in.', function(done) {
        var callback = function(pixelData) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var image = context.createImageData(2, 2);
            var grayscale = ImageUtil.grayscale(pixelData)
            ImageUtil.populateCanvasImageData(grayscale, image.data);
            expect(image.data[0]).toEqual(84);
            done()
        }
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    })
});