//callbacks , higher-order-functions, clouser

// console.log("Welcome");

// setTimeout(() => console.log("Get lost"), 2000);

// function x()
// {
//     function y(params) {
//         console.log("In y");
//     }
//     console.log("In x");
//     y();
// }

// x();

//functional programming - functions are the first class citizens

//higher order functions
// function add(a,b, handle){
//     let result = a + b;
//     handle(result); //print(result)
// }

// function print(result) {
//     console.log("printing" ,result);
// }

// function sendrequest(result) {
//     console.log("Sending data to server ", result);
// }

// add(4,5, sendrequest);


//closure
function Outer() {
    let num1 = 20;
    console.log("outer", num1);
    return function(num3) {
        let num2 = 10;
        console.log("inner", num2, num1, num3);
    };
    // return 5;
}

let result = Outer();
// console.log(result);
result(7);


// function result() {
//     let num2 = 10;
//     console.log("inner", num2, num1);
// }
