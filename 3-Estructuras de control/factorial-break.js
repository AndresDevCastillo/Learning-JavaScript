let factorial = 1;
let num = 1;
while (true) {
    factorial = factorial*num;
    num++;
    if (num == 10) {
        break;
    }
}
console.log(factorial);