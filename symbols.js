// var a = Symbol("Alien");
// var b = Symbol("Alien");
// console.log(a === b);

// var c = "Aline";
// var d = "Aline";
// console.log(c === d);

// console.log(typeof a, typeof c);

let age = Symbol("age");

let user = {
    name:"Deep",
    quali: "B.Tech",
    [age] : 21,
};

console.log(user);
console.log(user.name);
// console.log(user.age);
console.log(user[age]);

for(let key in user)
{
    console.log(key);
}

console.log(JSON.stringify(user)); //object to json conversion

