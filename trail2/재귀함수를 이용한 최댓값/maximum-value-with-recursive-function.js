const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(n){
    if(n === 0) return arr[0];
    return Math.max(solution(n - 1), arr[n]);
}

const result = solution(n-1);
console.log(result);