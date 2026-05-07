const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let count = 0;
function solution(n){
    if(n === 1)return count;
    if(n % 2=== 0) return solution(Math.floor(n/2), count++);
    else return solution(Math.floor(n/3), count++);
}

let result = solution(n);
console.log(result);