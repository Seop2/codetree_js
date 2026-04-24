const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
let count = 0;
function isSolutionNumber(number){
    if(number % 3 === 0) return true;
    else if( `${number}`.includes("3") || `${number}`.includes("6")|| `${number}`.includes("9")) return true;
}


for(let i=A; i<=B; i++){
    if(isSolutionNumber(i)) count++;
}
console.log(count);