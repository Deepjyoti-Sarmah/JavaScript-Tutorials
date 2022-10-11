//calculator with all basic operators 

let num1 = 2
let num2 = 4

let sum = num1 + num2;
console.log(sum);


let diff;
if (num1 > num2 ) {
    diff = num1 - num2;
}else {
   diff = num2 - num1;
}
console.log(diff)


let mul = num1 * num2;
console.log(mul);


let div
if ( num2 != 0 && num2 < num1){
    div = num1%num2;
}else {
    div = num2 % num1;
}
console.log(div)


let pow = 1;
while (num2 > 0) {
    pow = pow * num1;
    num2--;
}

console.log(pow)