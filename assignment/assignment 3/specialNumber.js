// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14


function specialNumber(num) {
    
    let temp = num;
    let r = 0;
    let sum = 0;

    while(temp > 0)
    {
        r = temp % 10;
        sum += factorial(r);
        temp = parseInt(temp/10);
    }
    if(sum == num)
    {
        return "Yes";
    }

    return "No";
}

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

console.log(specialNumber(145));

