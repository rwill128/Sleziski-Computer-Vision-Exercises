var ImageUtil = {
    loadImage: function(path, width, height, callback) {
        var canvas = document.createElement('canvas');
        Caman(canvas, path, function() {
            var returnValue = [];
            for (var currentRow = 0; currentRow < height; currentRow++) {
                returnValue.push([])
                for (var currentColumn = 0; currentColumn < width; currentColumn++) {
                    returnValue[currentRow].push([this.originalPixelData[currentRow * width * 4+ currentColumn * 4],
                                                this.originalPixelData[currentRow * width * 4 + currentColumn * 4 + 1],
                                                this.originalPixelData[currentRow * width * 4 + currentColumn * 4 + 2],
                                                this.originalPixelData[currentRow * width * 4 + currentColumn * 4 + 3]])
                }
            }
            callback(returnValue)
        })
    },
    grayscale: function(pixelData) {
        return _.map(pixelData, function(rowArray) {
            return _.map(rowArray, function(elementArray) {
                return elementArray[0] *.299 + elementArray[1] *.587 + elementArray[2] *.114
            });
        });
    }
};