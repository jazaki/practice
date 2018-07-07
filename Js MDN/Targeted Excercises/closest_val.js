/* function closest(targetVal, arr) {
    return arr.reduce(function(acc, curr) {
        return ( Math.abs(curr - targetVal) < Math.abs(acc - targetVal) ? curr : acc;
    })
} */

var arr = [2, 5, 8, 8, 9, 6, 7, 3]; //given array
var targetVal = 11; // given number for which the closest value need to be found
var closest = null; // the identified closest value

function closeVal () {
    
    if (arr.length === 0) {
        return null
    }
    else if (arr.length === 1) {
        return arr[0];
    }
    else {
        return arr.reduce(function (acc, curr) {
            return (Math.abs(curr - targetVal) < Math.abs(acc - targetVal) ? curr : acc);
        })
    }
}
console.log(closeVal());


// console.log(closest(11, arr));