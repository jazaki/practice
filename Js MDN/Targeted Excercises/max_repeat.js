var arr = ["and", "I", "and", "am", "and","I", "and"];

// BASIC

function maxOccur(arr) {
    if (arr.length === 0) {
        return null;
    }
    else if (arr.length === 1) {
        return arr[0];
    }
    else {
        let map = {};
        for(let i = 0; i < arr.length; i++) {
            if(!map[arr[i]]) {
                map[arr[i]] = 1;
            }
            else {
                map[arr[i]]++;   
            }
        }
        return Object.keys(map).reduce((a, b) => {
            return map[a] > map[b] ? a : b;
        })
    }
}

console.log(maxOccur(arr));


// ADVANCED                        
/* (function () {
    if(arr.length === 0) {
        result = null;
    }
    else if(arr.length === 1) {
        result = arr[0];
    }
    else {
        result = arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }
})();
console.log(result); */