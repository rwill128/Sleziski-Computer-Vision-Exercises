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
        return new Vector(_.map(self.elements, function(num) {
            return num * scalar;
        }))
    };
    
    self.subtract = function(vect) {
        var newElements = _.merge(self.elements, vect.elements, function(a, b) {
           return a - b;            
        });
        return new Vector(newElements);
    };
    
    self.translate = function(translationArray) {
        // This is using the x' = x + t form of translation. (The simplest one.)
        var newElements = _.merge(self.elements, translationArray.elements, function(a, b) {
            return a + b;
        });
        self.elements = newElements;
    };
    
    return self;
}