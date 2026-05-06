const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

const arr = Array(n + 1);
arr[0] = 0;

for (let i = 1; i <= n; i++) {
    arr[i] = A[i - 1];
}

function getAnswer(a1, a2) {
    let returnValue = 0;
    for (let i = a1; i <= a2; i++) {
        returnValue += arr[i];
    }
    return returnValue;
}

for (let i = 0; i < queries.length; i++) {
    let [a1, a2] = queries[i];
    console.log(getAnswer(a1, a2));
}