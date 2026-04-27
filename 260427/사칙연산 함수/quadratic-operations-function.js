const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

const cal = ['+', '-', '/', "*"]

if(o === cal[0]){
    console.log(`${a} ${o} ${c} = ${a + c}`)
}else if(o === cal[1]){
    console.log(`${a} ${o} ${c} = ${a - c}`)
}
else if(o === cal[2]){
    console.log(`${a} ${o} ${c} = ${Math.floor(a / c)}`)
}
else if(o === cal[3]){
    console.log(`${a} ${o} ${c} = ${a * c}`)
}else{
    console.log("False");
}
      