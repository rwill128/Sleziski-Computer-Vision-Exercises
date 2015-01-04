function Rectangle(x1, y1, x2, y2) {
    var self = this;
    self.topLeft = new Vector([x1, y1]);
    self.bottomRight = new Vector([x2, y2]);

    self.setBottomRight = function(x, y) {
        self.bottomRight = new Vector([x, y])
    };

    self.setTopLeft = function(x, y) {
        self.topLeft = new Vector([x, y])
    };
    
    self.x = function() {
        return _.min([self.topLeft.elements[0], self.bottomRight.elements[0]]);
    };
    
    self.y = function() {
        return _.min([self.topLeft.elements[1], self.bottomRight.elements[1]]);
    };
    
    self.width = function() {
        return _.max([self.topLeft.elements[0], self.bottomRight.elements[0]]) - self.x();
    };
    
    self.height = function() {
        return _.max([self.topLeft.elements[1], self.bottomRight.elements[1]]) - self.y();
    };
    
    self.getTopLeftVector = function() {
        return self.topLeft;
    };
    
    self.getBottomRightVector = function() {
        return self.bottomRight;
    };
    
    self.getBottomLeftVector = function() {
        return self.bottomLeft;
    };
    
    self.getTopRightVector = function() {
        return self.topRight
    };

    self.bottomLeft = new Vector(self.x(), self.y() + self.height());
    self.topRight = new Vector(self.x() + self.width(), self.y());
    
    return self;
}