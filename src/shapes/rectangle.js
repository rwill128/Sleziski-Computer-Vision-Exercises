function Rectangle(cornerOne, oppositeCorner) {
    var self = this;
    self.originalWidth = Math.abs(cornerOne[0] - oppositeCorner[0]);
    self.originalHeight = Math.abs(cornerOne[1] - oppositeCorner[1]);
    var vectors = [cornerOne, [cornerOne[0], cornerOne[1] + self.originalHeight], oppositeCorner, [cornerOne[0] + self.originalWidth, cornerOne[1]]];
    self.vectors = vectors;
    self.vectorArray = function() {
        return self.vectors
    };
    
    //Does a post-multiply of our points in an X * 2 formation with an input matrix. Meaning the equation is self.matrix * tranformationMatrix
    self.transform = function(transformationMatrix) {
        //If the size of the first row of our coordinate matrix does not equal the number of columns in the transformation matrix.
        if (_.size(self.vectorArray()[0]) !== _.size(transformationMatrix)) {
            throw new Error("Transformation matrix has invalid dimensions.");
        }
    };
    return self;
}