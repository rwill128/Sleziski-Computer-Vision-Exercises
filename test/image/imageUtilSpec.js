describe('The ImageUtil API', function() {
    it('should load an image from the specified image path.', function() {
        var image = ImageUtil.loadImage('data/blue-square', 2, 2)
        dump(image)
    })
    
});