var Matrix = {
    multiply: function(matrix1, matrix2) {
        if (_.size(matrix1[0]) !== _.size(matrix2)) {
            throw new Error("Transformation matrix has invalid dimensions.");
        }
        return _.map(matrix1, function(rowArray, rowNumber) {
            var newRowArray = _.map(rowArray, function(value, columnNumber) {
                var newValue = 0;
                _.forEach(matrix2, function(matrix2) {
                    newValue = newValue + value * matrix2[columnNumber];
                });
                return newValue;
            });
            return newRowArray;
        });
    }
};