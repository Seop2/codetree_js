const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);
let count = 0;
function solutionNumber(number){
    if(number % 2===0) return false;
    if(number % 10 === 5) return false;
    if(number % 3 ===0 && number % 9 !== 0) return false;
    return true;
}

for(let i=a; i<=b; i++){
    if(solutionNumber(i))count++;;
}
console.log(count);