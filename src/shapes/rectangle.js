function Rectangle(cornerOne, oppositeCorner) {
    var self = this;
    self.originalWidth = Math.abs(cornerOne[0] - oppositeCorner[0]);
    self.originalHeight = Math.abs(cornerOne[1] - oppositeCorner[1]);
    var vectors = [cornerOne, [cornerOne[0], cornerOne[1] + self.originalHeight], oppositeCorner, [cornerOne[0] + self.originalWidth, cornerOne[1]]];
    self.vectors = vectors;
    self.vectorArray = function() {
        return self.vectors
    };
    
    //Does a post-multiply of the equation self.matrix * tranformationMatrix
    self.transform = function(transformationMatrix) {
        //If the size of the first row of our coordinate matrix does not equal the number of columns in the transformation matrix.
        if (_.size(self.vectorArray()[0]) !== _.size(transformationMatrix)) {
            throw new Error("Transformation matrix has invalid dimensions.");
        }
        self.vectors = _.map(self.vectorArray(), function(rowArray, rowNumber) {
            var newRowArray = _.map(rowArray, function(value, columnNumber) {
                var newValue = 0;
                _.forEach(transformationMatrix, function(transformationArrayRow) {
                    newValue = newValue + value * transformationArrayRow[columnNumber];                    
                });
                return newValue;
            });
            return newRowArray;
        });
    };
    return self;
}