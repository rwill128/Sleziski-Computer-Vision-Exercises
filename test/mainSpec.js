describe('Helper functions', function() {
    it('should be able to find the closest vertex to a point out of a list of polygons.', function() {
        var polys = [];
        polys.push(new Polygon(
            [new Vector([5.0,5.0]),
            new Vector([10.0,10.0])]
        ))
        var nearestPoint = getNearestPoint(polys, new Vector([6.0, 6.0]))
        expect(nearestPoint.elements).toEqual([5.0,5.0]);
    })
    
});