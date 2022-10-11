// let nums = [2,3,5];
// nums[3] = 9;
// console.log(nums[3]);
// console.log(nums);

// let values = [5, "Deep", {comp : "DKG"}, 
//             function() { console.log("Hi");}];

// let values = [5, "ABC", {comp : "Ph"}, 
//             () => { console.log("Hi");}];

// console.log(values);

// // values[3]();

// let run = values[3];
// run();

// let values = [9,5,3,4,7];

// console.log( values.push(1));  //[9,5,3,4,7,1];
// console.log(values.pop());  // [9,5,3,4,7];
// console.log(values.shift()); // [ 5, 3, 4, 7 ];
// console.log(values.unshift(8)); //[ 8, 5, 3, 4, 7 ]

// console.log(values);

// let num = [];

// num[0] = 9;
// num[99] = 4;

//for of and 

// for(let i in num)
//     console.log(num[i]); 

// for in  
// for(let i of num)
//     console.log(i);

// let values = [9,5,3,4,7];
// // delete values[0];
// // console.log(values);

// let values = [9,5,3,4,7];

// values.splice(0,2, 8); // [ 8, 3, 4, 7 ]
// console.log(values);

// let values = [9,5,3,4,7];
// values.forEach( (num) => console.log(num));

// let values = [9,6,3,4,7];

// values.forEach( (num) => 
//     {   
//         if(num %2 ==0 )
//             console.log(num)
//     });

// filter 
// values.filter((num) => num % 2 === 0)
//         .forEach( (num) => console.log(num ));


//map
// values.filter((num) => num % 2 === 0)
//         .map((num) =>  num*2 )
//         .forEach( (num) => console.log(num));

// console.log(values);


//reduce 
// let values = [8,6,3,4,2];

// let result = values.filter((num) => num % 2 === 0)
//                     .map((num) => num*2)
//                     .reduce((sum, num) => sum + num, 0);

// console.log(result);


// let a = 9;
// let b = 6;
// let c = 5;

// let value = [a,b,c]; //array structuring 

// console.log(value);

// let values = [9,5,3,4,7];

// let a = values[0];
// let b = values[1];
// let c = values[2];

// let [a,b,c,d,e] = values; //array destructuring
// console.log(a,c);

// let [a,b,c, ...d] = values; //array destructuring //rest parameters
// console.log(a,b,c, d);

// let string = "Aman Navin Hyder Hitesh Ninad"
// let [x,y, ...z] = string.split(' ');
// console.log(x,y,z);

//rest and spread operator

// function sum(a, b, ...nums) //as a perameter it is rest
// {
//     let result = a + b;

//     for(let num of nums){
//         result += num;
//     }

//     return result;
// }

// let result = sum(4, 5, 8,9,7);
// console.log(result);

function sum(a, b, c, d, e)
{
    let result = a + b + c + d + e;


    return result;
}

let num = [4,5,6,7,8];

let result = sum(...num); //as a argument it is spread
console.log(result);     