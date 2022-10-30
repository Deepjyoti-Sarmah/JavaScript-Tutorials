var c = ["javascript", "react" ,"nodejs", "blockchain"];

// for(let i = 0; i<c.length; i++)
// {
//     console.log(c[i]);
// }

let g = c[Symbol.iterator]();

// console.log(typeof c[Symbol.iterator]());

// let firstValue = g.next();
//     console.log(firstValue);

//     let secVal = g.next();
//     console.log(secVal);

//     console.log(g.next().value);
//     console.log(g.next().done);

//     console.log(g.next());

let str1 = "deepjyoit Sarmah";
let itr1 = str1[Symbol.iterator]();
let res = itr1.next();

while (!res.done) {
    console.log(res.value);
    res = itr1.next();
}