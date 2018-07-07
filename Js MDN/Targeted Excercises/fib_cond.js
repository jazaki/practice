var arr = [0, 1];
var limit = 33;

while (arr[arr.length - 1] + arr[arr.length - 2] <= limit) {
    arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
}
console.log(arr.join(", "));

/* function condFib(lim) {
    let x= 0;
    let y = 1;
    let fibArr = [0];
    while(y < lim) {
        fibArr.push(y);
        y += x;
        x = (y - x);
    }
    console.log(fibArr.join(", "));
}

condFib(33); */