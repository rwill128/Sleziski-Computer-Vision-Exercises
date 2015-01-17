describe('The ImageUtil API', function() {
    it('should load one pixel correctly from an image at the specified image path.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 1, 1, callback)
    });
    it('should load 2 horizontal pixels correctly from an image.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[83.77, 83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 2, 1, callback)
    });
    it('should load 2 vertical pixels correctly from an image.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[83.77], [83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 1, 2, callback)
    });
    it('should load 3 horizonal pixels correctly from an image.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[83.77, 83.77, 83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 3, 1, callback)
    });
    it('should load 4 horizonal pixels correctly from an image.', function(done) {
        var callback = function(pixelData) {
            expect(pixelData).toEqual([[83.77, 83.77, 83.77, 83.77]]);
            done()
        };
        ImageUtil.loadImage('data/blue-square.jpg', 4, 1, callback)
    })
});