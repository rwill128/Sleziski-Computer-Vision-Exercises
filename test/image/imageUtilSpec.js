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
            var greyscaleData = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform)
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
            var grayscaleData = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
            expect(grayscaleData).toEqual([[83.77, 83.77],
                                            [83.77, 83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    });
    it('should place my image data into a canvas image data object that I pass in.', function(done) {
        var callback = function(pixelData) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var image = context.createImageData(2, 2);
            ImageUtil.populateCanvasImageData(pixelData, image.data);
            expect(image.data[0]).toEqual(63);
            expect(image.data[1]).toEqual(71);
            expect(image.data[2]).toEqual(204);
            expect(image.data[3]).toEqual(255);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    });
    it('should place my greyscale image data into a canvas image data object that I pass in.', function(done) {
        var callback = function(pixelData) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var image = context.createImageData(2, 2);
            var grayscale = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform)
            ImageUtil.populateCanvasImageData(grayscale, image.data);
            expect(image.data[0]).toEqual(84);
            expect(image.data[1]).toEqual(84);
            expect(image.data[2]).toEqual(84);
            expect(image.data[3]).toEqual(255);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    });
    it('should invert the grayscale image successfully.', function(done) {
        var callback = function(pixelData) {
            var grayscaleData = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
            expect(grayscaleData[0][0]).toEqual(83.77);
            var invertedTransform = ImageUtil.transform(grayscaleData, ImageUtil.InvertTransform);
            expect(invertedTransform[0][0]).toBeCloseTo(171, 0);
            done();
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 2, callback)
    })
    it('should apply a gaussian blur successfully.', function(done) {
        var callback = function(pixelData) {
            var grayscaleData = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
            expect(grayscaleData[0][0]).toBeCloseTo(144, 0);
            var blurredImage = ImageUtil.gaussianBlur(grayscaleData, 1);
            expect(blurredImage[0][0]).toBeCloseTo(119, 0);
            done();
        };
        ImageUtil.loadImage('data/img_the_scream.jpg', 10, 10, callback)
    });
    it('should get a one-dimensional pixel neighbor matrix along the x-axis successfully.', function(done) {
        var callback = function(pixelData) {
            var grayscaleData = ImageUtil.transform(pixelData, ImageUtil.GrayscaleTransform);
            var pixelNeighborMatrix = ImageUtil.pixelNeighborMatrix(grayscaleData, 4, 4, 1);
            expect(pixelNeighborMatrix).toEqual([ 119.20299999999999, 126.20299999999999, 118.20299999999999, 121.893, 107.17, 108.86, 106.55 ]);
            done();
        };
        ImageUtil.loadImage('data/img_the_scream.jpg', 10, 10, callback)
    });
    it('should construct a gaussian distribution matrix successfully based on sigma, which is the input standard deviation in pixels.', function() {
        expect(gaussianWeightArray(1)).toEqual([[0.004431848411938008],
                                                            [0.05399096651318806], 
                                                            [0.24197072451914337], 
                                                            [0.3989422804014327], 
                                                            [0.24197072451914337], 
                                                            [0.05399096651318806], 
                                                            [0.004431848411938008]])
    });
});