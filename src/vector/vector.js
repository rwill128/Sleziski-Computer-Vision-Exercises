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
        var newElements = [];
        for (var i = 0; i < self.elements.length; i++) {
            newElements.push(self.elements[i]- vect.elements[i])
        }
        return new Vector(newElements);
    };

    self.translate = function(translationArray) {
        // This is using the x' = x + t form of translation. (The simplest one.)
        var newElements = [];
        for (var i = 0; i < self.elements.length; i++) {
            newElements.push(self.elements[i] + translationArray.elements[i])
        }
        self.elements = newElements;
    };

    return self;
}