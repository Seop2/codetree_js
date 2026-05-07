const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);


function solution(n){
    if(n===1 | n===2)return 1;
    else return solution(n-1) + solution(n-2);
}

const result = solution(n);
console.log(result);