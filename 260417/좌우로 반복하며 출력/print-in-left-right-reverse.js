const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
let result = "";
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        for (let j = n; j >= 1; j--) {
            result += `${j}`;
        }
    } else {
        for (let j = 1; j <= n; j++) {
            result += `${j}`;
        }
    }

    result += "\n";
}
console.log(result);