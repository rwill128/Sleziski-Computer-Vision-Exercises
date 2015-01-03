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
    
    return self;
}