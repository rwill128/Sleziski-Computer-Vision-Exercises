function Vector(elements) {
    var self = this;
    self.elements = elements;
    
    self.magnitude = function() {
        var squaredArray = _.map(self.elements, function(num) {
          return num * num;
        });
        return Math.sqrt(_.reduce(squaredArray, function(sum, nextNum) {
            return sum + nextNum;
        }));
    };
    
    self.scalarMultiply = function(scalar) {
        return _.map(self.elements, function(num) {
            return num * scalar;
        })
    };
    
    return self;
}