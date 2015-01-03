function Vector(elements) {
    var self = this;
    self.elements = elements;
    
    Vector.prototype.magnitude = function() {
        var squaredArray = _.map(self.elements, function(num) {
          return num * num;
        });
        dump(squaredArray)
        return Math.sqrt(_.reduce(squaredArray, function(sum, nextNum) {
            return sum + nextNum;
        }));
    };
    
    Vector.prototype.scalarMultiply = function(scalar) {
        return _.map(self.elements, function(num) {
            return num * scalar;
        })
    };
}