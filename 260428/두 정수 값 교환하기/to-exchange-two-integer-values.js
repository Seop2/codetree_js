const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);

function swap(n, m){
    [n, m] = [m, n];
    return [n, m];
}
swap(n, m);


console.log(n, m);