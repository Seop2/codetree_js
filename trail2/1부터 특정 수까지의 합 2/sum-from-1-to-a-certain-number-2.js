const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let result = 0;
function solution(n){
    if(n===0)return;
    solution(n-1);
    result += n;
}
solution(n);
console.log(result);