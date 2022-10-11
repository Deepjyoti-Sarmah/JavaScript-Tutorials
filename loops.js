//loops 
//while - pre conditions
//do while - post condition 
//for loop 

// let y = 1

// while (y <= 5) {
//     console.log("Hello " + y);
//     y++;
// }

// for (let i = 0; i <= 5; i++) {
//     console.log("Hello " + i);
// }

// let day = "Teachers Day";

// if (day === "sun" && day === "sat") {
//     console.log("6am");
// }
// else if ( day === "mon"){
//     console.log("6am");
// }
// else if (day === "wed") {
//     console.log("7am");
// }
// else{
//     console.log("Keep dreaming");
// }

// let day = "sun";

// switch(day)
// {
//     case "sat":
//     case "sun" :
//         console.log("8am");
//         break;
//     case "mon" :
//     case "tue" :
//     case "thus" :
//         console.log("6am");
//         break;
//     case "wed":
//     case "fri":
//         console.log("7am");
//     default:
//         console.log("keep dreaming");
// }

// for(let i = 0; i<=5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 5 ; i++) {
//     for (let j = 0; j <= 5; j++) {
//         console.log(j + " ");
//     }
//     console.log("Ends here " + i);
// }


// --------------------------------------------------------

//functions 

//procedual , functions, objects
//functions are first class citizens



function dosomething() {
    let name = "Deepjyoti"
    console.log(name);
}

// dosomething()

let num1 = 7;
let num2 = 8;
let num3 = 9;

function add(n1 , n2, n3= 0){
   
    return (n1 + n2);
}

let result = add(num1, num2)
console.log(result);
