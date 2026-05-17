const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let count1 = 0;
let count2 = 0;
for(let i=0; i<input.length; i++){
    if(input[i] === 'e' && input[i+1] === 'e')count1++;
    if(input[i]==='e'&& input[i+1]==='b')count2++;
}

console.log(count1, count2);