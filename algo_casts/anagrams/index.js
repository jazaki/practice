// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    var newA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    var newB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    if(newA === newB){
        return true;
    }
    else{
        return false;
    }
}


module.exports = anagrams;


// Solution 1

/* function anagrams(stringA, stringB) {
    AcharMap = buildCharMap(stringA);
    BcharMap = buildCharMap(stringB);

    if (Object.keys(AcharMap).length !== Object.keys(BcharMap).length) {
        return false;
    }

    for (let char in AcharMap) {
        if (AcharMap[char] !== BcharMap[char]) {
            return false
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap;
} */

//  Solution 2

/* function anagrams(stringA, stringB) {
    var newA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    var newB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    if (newA === newB) {
        return true;
    }
    else {
        return false;
    }
} */