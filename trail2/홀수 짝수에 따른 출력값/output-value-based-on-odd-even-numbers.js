const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);




function solution(n){
    if(n === 1 || n === 2) return n;
    return n + solution(n-2);
}


let sum = solution(n);
console.log(sum);