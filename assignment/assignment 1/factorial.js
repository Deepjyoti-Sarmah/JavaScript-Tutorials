function factorial(num) {
    let ans = 1;
    if(num == 0 || num == 1){
        return ans;
    }else {
        for (let i = 1; i <= num; i++) {
            ans = ans * i;
        }
        return ans;
    }
}

let num = 5;
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);