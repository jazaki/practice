// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

module.exports = reverse;

// Other Solutions

    /* Solution 1 */
    // return str.split('').reverse().join(''); 

    /* Solution 2 */
    // let reversed = '';

    // for(let char of str){
    //     reversed = char + reversed;
    // }
    // return reversed;

    // Solution 3
    // return str.split('').reduce((rev, char)=>char+ rev,''); //ES6 Used