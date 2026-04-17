const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
let result = "";
for(let i=1; i<=n; i++){
    let row = "";
    for(let j=1; j<=n; j++){
        if(j%2===0){
            row += (n-i+1)
        }else{
            row+=i;
        }
    }
    result += row +"\n";
}
console.log(result);