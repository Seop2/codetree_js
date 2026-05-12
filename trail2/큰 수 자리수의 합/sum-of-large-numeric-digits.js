const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

let n = a * b * c;

function solution (n){
     if (n === 0) return 0;
    return solution(parseInt(n/10)) + (n % 10);
}

const result = solution(n);
console.log(result);