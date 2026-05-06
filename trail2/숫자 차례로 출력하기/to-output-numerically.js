const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let result = "";

function sol1(n) {
    if (n === 0) return;
    sol1(n - 1);
    result += n + " ";
    
}

function sol2(n) {
    if (n === 0) return;
    result += n + " ";
    sol2(n - 1);
}

sol1(n);
result += "\n";
sol2(n);
console.log(result);

