const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

const a = [...new Set(A)];
if(a.length >= 2){
    console.log("Yes");
}else {
    console.log("No");
}