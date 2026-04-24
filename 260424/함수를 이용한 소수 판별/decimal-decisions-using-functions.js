const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);
let sum = 0;
function isPrime(number){
    if(number < 2)return false;
    if(number === 2)return true;
    if(number % 2===0)return false;
    
    const root = Math.sqrt(number);
    for(let i=3; i<=root; i++){
        if(number % i === 0)return false;
    }
    return true;
}
for(let i=A; i<=B; i++){
    if(isPrime(i))sum += i; 
}

console.log(sum);