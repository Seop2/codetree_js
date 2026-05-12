const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let count = 0;
function solution(n){
    if(n === 1)return count;
    if( n % 2=== 0){
        count++;
        return solution(Math.floor(n/2))
    }else {
        count++;
        return solution(n * 3 +1);
    }
    
}
solution(n);
console.log(count);