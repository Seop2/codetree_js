const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);


const isSolutionNumber= (n) => {
    if(n % 2 !== 0) return false;
    const ten = Math.floor(n / 10);
    const one = n % 10;
    return (ten + one)% 5===0;
}


console.log(isSolutionNumber(n) ? "Yes" : "No")