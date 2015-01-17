var ImageUtil = {
    loadImage: function(path, width, height, callback) {
        var canvas = document.createElement('canvas');
        Caman(canvas, path, function() {
            var pixelData = [];
            for (var i = 0; i < height; i++) {
                pixelData.push([]);
                if((i*j) % 3 !== 0) {
                    for (var j = 0; j < width; j++) {
                        pixelData[i].push(this.originalPixelData[i * j] * .299 + this.originalPixelData[(i * j) + 1] * .587 + this.originalPixelData[(i * j) + 2] * .114)
                    }
                }
            }
            callback(pixelData)
        })
    }
};