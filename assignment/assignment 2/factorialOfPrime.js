// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).


function factorialOfPrime(low, high){

    for(let i=low;i<=high;i++)
    {
        if(i == 0 || i == 1){
            continue;
        }
        if(isPrime(i)){
            console.log(`${i} is a prime and its factorial is: ${getFactorial(i)}`);
        }
    }
}

function isPrime(num)
{
    for(let i=2;i*i<num;i++)
    {
        if(num % i === 0)
            return false;
    }
    return true;
}

function getFactorial(num)
{
    let factorial = 1;
    for(let i = 1; i <= num;i++)
    {
        factorial *= i;
    }
    return factorial;
}

factorialOfPrime(10,100)