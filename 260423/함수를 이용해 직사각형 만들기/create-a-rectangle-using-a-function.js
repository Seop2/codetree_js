const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let result = "";
for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
        result += "1";
    } result += "\n";
}
console.log(result);