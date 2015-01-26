describe('A matrix', function() {
    it('should return the same value when multiplied with an identify matrix.', function() {
        var matrix1 = [[5, 5],
            [7, 2],
            [3, 4]];
        var matrix2 = [[1, 0],
            [0, 1]];
        var resultMatrix = Matrix.multiply(matrix1, matrix2);
        expect(resultMatrix).toEqual([[5, 5],
            [7, 2],
            [3, 4]]);
    });
});