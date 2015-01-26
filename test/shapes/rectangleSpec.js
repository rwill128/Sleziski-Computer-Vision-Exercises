describe('A rectangle', function() {
    it('should have correct width.', function() {
        var rectangle = new Rectangle([2,2], 
                                    [9,4]);
        expect(rectangle.originalWidth).toBe(7);
    })
    it('should have correct height.', function() {
        var rectangle = new Rectangle([2,2], 
                                    [9,4]);
        expect(rectangle.originalHeight).toBe(2);
    });
    it('should create two other vectors to represent the four corners.', function() {
        var rectangle = new Rectangle([5,5], [15,10]);
        expect(rectangle.vectors).toEqual([[5,5],
                                        [5,10],
                                        [15,10],
                                        [15,5]]);
    });    
    it('should throw an exception when asked to transform with an empty matrix.', function() {
        var rectangle = new Rectangle([5,5], 
                                    [15,10]);
        expect( function() { rectangle.transform([]) }).toThrow(new Error("Transformation matrix has invalid dimensions."))
    });
    it('should stay the same when asked to transform an identity matrix.', function() {
        var rectangle = new Rectangle([5,5], 
                                    [15,10]);
        rectangle.transform([[1,0],
                            [0,1]]);
        expect(rectangle.vectors).toEqual([[5,5],
                                        [5,10],
                                        [15,10],
                                        [15,5]]);
    });
    it('should throw an exception when asked to transform with a 3*2 matrix.', function() {
        var rectangle = new Rectangle([5,5], 
                                    [15,10]);
        expect( function() {         
            rectangle.transform([[1,0],
                                [1,0],
                                [0,1]]);
        }).toThrow(new Error("Transformation matrix has invalid dimensions."))
    });
    it('should scale by 2 when asked to transform with this matrix.', function() {
        var rectangle = new Rectangle([2,2],
                                    [5,5]);
        rectangle.transform([[2,0],
                            [0,2]]);
        expect(rectangle.vectors).toEqual([[4,4],
                                        [4,10],
                                        [10,10],
                                        [10,4]]);
    });
});