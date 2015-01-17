var ImageUtil = {
    loadImage: function(path, width, height, callback) {
        var canvas = document.createElement('canvas');
        Caman(canvas, path, function() {
            var returnValue = [];
            for (var currentRow = 0; currentRow < height; currentRow++) {
                returnValue.push([]);
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
    },
    populateCanvasImageData: function(pixelData, imageData) {
        var indexCounter = 0;
        var returnArray = new Uint8ClampedArray(_.size(_.flatten(pixelData)));
        _.forEach(pixelData, function(rowArray){
            _.forEach(rowArray, function(elementArray) {
                if (_.size(elementArray) === 0) {
                    //we have one-element pixel data such as a grayscale image.
                    _.times(3, function() {
                        imageData[indexCounter] = elementArray;
                        indexCounter = indexCounter + 1
                    })          
                    imageData[indexCounter] = 255
                    indexCounter = indexCounter + 1
                } else {
                    _.forEach(elementArray, function(number) {
                        imageData[indexCounter] = number;
                        indexCounter = indexCounter + 1
                    })
                }
            })
        });
    }
};