//functions are first class citizens
//x = 0 
//value 

//define,  pass, return
//define, pass, return, assign 

// function add(num1 , num2) { //function statement
//     return num1 + num2;
// }

// let sum = add; //assigning a func
// // console.log(sum);

// let res = sum(3, 4);
// console.log(res);

let n1 = 6;
let n3 = 7;


// let add1 = function(n1, n3) { //function expression 
//     return n1 + n3
// }
// add1();

// let res = add1(n1, n3); //calling a function
// console.log(res);

let add1 = (n1, n3) => n1 + n3 //arrow function  

let res = add1(n1, n3); //calling a function
console.log(res);