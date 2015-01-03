describe('A vector', function() {
    it('should correctly calculate its magnitude.', function() {
        var vector = new Vector( [2.0, 2.0] );
        expect(vector.magnitude()).toBe(Math.sqrt(8));
    });
    it('should correctly multiply itself by a scalar.', function() {
        var vector = new Vector( [3.0, 3.0] );
        expect(vector.scalarMultiply(5)).toEqual( [15.0, 15.0] )
    });
});