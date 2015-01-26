function gaussianWeightArray(sigma) {
    var weightArray = [];
    var arrayLength = sigma * 6 + 1;
    _.times(arrayLength, function(rowNumber) {
        var distFromMiddleElement = Math.abs((arrayLength - 1) / 2 - rowNumber);
        weightArray.push([(1/Math.sqrt(2*Math.PI*Math.pow(sigma, 2)))*Math.pow(Math.E, -Math.pow(distFromMiddleElement, 2)/(2*Math.pow(sigma,2)))])
    });
    return weightArray;
}

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
    gaussianBlur: function(pixelData, sigma) {
        var weightArray = gaussianWeightArray(sigma);
        return _.map(pixelData, function(row, rowIndex) {
            return _.map(row, function(element, columnIndex) {
                var pixelNeighborArray = ImageUtil.pixelNeighborMatrix(pixelData, rowIndex, columnIndex, sigma);
                var weightedResults = _.map(pixelNeighborArray, function(element, index) {
                    if (element !== undefined) {
                        return element * weightArray[index]
                    } else {
                        return 0;
                    }
                });
                return _.reduce(weightedResults, function(sum, next) {
                    return sum + next
                })
            })
        })
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
                    });          
                    imageData[indexCounter] = 255;
                    indexCounter = indexCounter + 1
                } else {
                    //we have four-element pixel data such as RGBA
                    _.forEach(elementArray, function(number) {
                        imageData[indexCounter] = number;
                        indexCounter = indexCounter + 1
                    })
                }
            })
        });
    },
    transform: function(pixelData, transformFunction) {
        return _.map(pixelData, function(row) {
            return _.map(row, function(pixel) {
                return transformFunction(pixel);
            })
        })        
    },
    InvertTransform: function(singleGrayPixel) {
        return 255 - singleGrayPixel;
    },
    GrayscaleTransform: function(singleRGBAPixel) {
        return singleRGBAPixel[0] *.299 + singleRGBAPixel[1] *.587 + singleRGBAPixel[2] *.114;
    },
    pixelNeighborMatrix: function(pixelData, rowIndex, columnIndex, sigma) {
        var resultMatrix = [];
        _.times(sigma * 6 + 1, function(index) {
            var distFromMiddle = Math.floor((sigma * 6 + 1) / 2) - index;
            resultMatrix.push(pixelData[rowIndex][columnIndex - distFromMiddle])
        });
        return resultMatrix
    }
};