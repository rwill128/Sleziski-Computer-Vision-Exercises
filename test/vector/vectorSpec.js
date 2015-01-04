describe('A vector', function() {
    it('should correctly calculate its magnitude.', function() {
        var vector = new Vector( [2.0, 2.0] );
        expect(vector.magnitude()).toBe(Math.sqrt(8));
    });
    it('should correctly multiply itself by a scalar.', function() {
        var vector = new Vector( [3.0, 3.0] );
        expect(vector.scalarMultiply(5).elements).toEqual( [15.0, 15.0] )
    });
    it('should correctly subtract another vector.', function() {
        var vect1 = new Vector( [5.0, 5.0] );
        var vect2 = new Vector( [2.0, 2.0] );
        var result = vect1.subtract(vect2);
        expect(result.elements).toEqual( [3.0, 3.0] );
    });
    it('should mutate itself when asked to translate.', function() {
        var vector = new Vector( [4.0, 4.0] );
        vector.translate( new Vector( [1.0, 1.0] ) );
        expect(vector.elements).toEqual( [5.0, 5.0] );
    });
});