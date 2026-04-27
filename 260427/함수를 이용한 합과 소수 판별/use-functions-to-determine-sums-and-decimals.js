const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

let count = 0;

//소수판별
function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

//자릿수 합
function getSum(number) {
    return String(number).split("").reduce((acc, cur) => acc + Number(cur), 0);
}

//짝수판별
function even(number) {
    return number % 2 === 0;
}

for (let i = A; i <= B; i++) {
    if (isPrime(i)) {
        let sum = getSum(i);
        if (even(sum)) count++;
    }
}

console.log(count);