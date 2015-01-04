describe('A rectangle', function() {
    it('should have correct width.', function() {
       var rect = new Rectangle(1,1,5,5);
       expect(rect.width()).toBe(4);
    });
    it('should have correct width even when the bigger coordinate comes first.', function() {
        var rect = new Rectangle(6,6,1,1);
        expect(rect.width()).toBe(5);
    });
    it('should have correct height.', function() {
       var rect = new Rectangle(1,1,2,5);
        expect(rect.height()).toBe(4);
    });
});
