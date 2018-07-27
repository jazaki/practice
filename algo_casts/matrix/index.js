// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var results = [];

    for(let i =0 ; i <n ; i++){
        results.push([]);
    }

    var count = 1,
        startCol = 0,
        endCol = n-1,
        startRow = 0,
        endRow = n-1;

    while((startCol <= endCol) && (startRow <= endRow))
    {
        // Top row
        for(let i=startCol ; i <= endCol; i++){
            results[startRow][i] = count;
            count++;
        }
        startRow++;

        // Right Column
        for(let j = startRow; j <= endRow; j++){
            results[j][endCol] = count;
            count++;
        }
        endCol-- ;
        
        // Bottom Row
        for(let k = endCol; k >= startCol ; k--){
            results[endRow][k] = count;
            count++;
        }
        endRow--;

        // Start Column
        for(let m = endRow; m >= startRow; m--){
            results[m][startCol] = count;
            count++;
        }
        startCol++;
    }
    return results;
}

module.exports = matrix;
