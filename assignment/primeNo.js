// find a given number is prime or not 

let num = 250
// let prime;
let i = 2;

while (i * i <= num) {
    if (num % i == 0) {
        console.log("Not Prime");
        break
    }else{
        console.log("Prime");
        break;
    }
    i++
}