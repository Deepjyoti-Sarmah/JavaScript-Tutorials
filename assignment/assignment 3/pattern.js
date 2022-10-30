// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let str = "";
let k = 1;
for (let i = 0; i < 5 ; i++) {
    for(let j = 0; j< i; j ++){
        // console.log(k);
        str += k;
        k++;
    }
    // console.log();
    str += "\n";
}
console.log(str);