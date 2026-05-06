const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

//누적합 배열 생성
const prefixSum = new Array(n+1).fill(0);

for(let i=0; i<n; i++){
    prefixSum[i+1] = prefixSum[i] + A[i];
}

const result = [];

for(let i=0; i<m; i++){
    const [a1, a2] = queries[i];
    const sum = prefixSum[a2] - prefixSum[a1-1];
    result.push(sum);
}

console.log(result.join("\n"))