const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);


function gcd(a, b){
    let gcd = 1;
    for(let i=1; i<=Math.min(n, m); i++){
        if(n % i===0 && m % i ===0){
           gcd = i; 
        }
    }
    return gcd;
}

function lcm(a,b){
    if(a === 0 || b===0)return 0;
    return (a / gcd(a,b))* b
}

console.log(lcm(n,m))