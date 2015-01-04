function Rectangle(x1, y1, x2, y2) {
    var self = this;
    self.firstVertex = new Vector([x1, y1]);
    self.secondVertex = new Vector([x2, y2]);

    self.setSecondVertex = function(x, y) {
        self.secondVertex = new Vector([x, y])
    };

    self.setFirstVertex = function(x, y) {
        self.firstVertex = new Vector([x, y])
    };

    self.x = function() {
        return _.min([self.firstVertex.elements[0], self.secondVertex.elements[0]]);
    };
    
    self.y = function() {
        return _.min([self.firstVertex.elements[1], self.secondVertex.elements[1]]);
    };
    
    self.width = function() {
        return _.max([self.firstVertex.elements[0], self.secondVertex.elements[0]]) - self.x();
    };
    
    self.height = function() {
        return _.max([self.firstVertex.elements[1], self.secondVertex.elements[1]]) - self.y();
    };
    
    return self;
}