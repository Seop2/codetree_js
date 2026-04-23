const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
let result = "";
let current = 1;
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(current ===10) current = 1;
        result += `${current} `
        current++;
    } result += "\n";
}
console.log(result);