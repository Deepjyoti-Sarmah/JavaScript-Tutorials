// let empty = {} 
// console.log(empty);

// let point = {x : 0, y : 0};
// let p1 = {x: point.x , y : point.y+1};
// console.log(p1);

// let book = new Object();
// book.title = "HP";
// book.author = "Jk R";
// book.pages = 400;
// book.publisher = "Bloom";
// book.published = 1997;

// console.log(book);

// book.pages = 600;
// book.author = "Navin";
// book["published"] = 2000;
// console.log(book);
// console.log(book.pages);

// let obj1 = Object.create({x:1, y: 2});
// let o2 = obj1.x + obj1.y;
// console.log(o2);

// const myCar = new Object();
// myCar.company = "BMW"
// myCar.model = "X6"
// myCar.year = 2019
// myCar.color = "Black"
// myCar.price = 20000
// myCar.engine = "V8"
// myCar.transmission = "automatic"
// myCar.milage = 10
// myCar.condition = "new"
// myCar.fuel = "petrol"

// console.log(myCar);

// myCar.model = "X6"
// console.log(myCar.model);

// myCar.transmission = "manula"
// console.log(myCar.transmission);

// myCar.fuel = "diesel"
// console.log(myCar.fuel);

// console.log(myCar);


//assignments 
//create a sutdent objects 
/*
    name
    age
    highest education
    subject - nested objects
    marks - individual subjects
    years of graduation 
*/

// let student = {
//     "name" : "Deepjyoti",
//     "age" : "21",
//     "subject" : {
//         "physics" : 88,
//         "Chemistry " : 89, 
//         "Maths" : 91
//     },
//     "year_Of_graduation" : 2020 
// }

// console.log(student);

// let student = new Object();
// student.name = "Deepjyoti";
// student.age = 21;
// student.quali = "B.Tech";
// student.rollNo = 68;
// student.subject = {
//     "physics" :78,
//     "chemistry" :88,
//     "maths" : 92
// };
// student.year = 2020;
// console.log(student)

// let student = new Object();
// student.name = "Deepjyoti";
// student.age = 21;
// student.quali = "B.Tech";
// student.rollNo = 68;
// student.subject = ["Physics", "Chem", "math"];
// student.marks = [77, 87, 98];
// student.year = 2020;
// console.log(student)

//constructor 

class Student {
    constructor(name, age, yop, high_qual, dob) {
        this.name = name;
        this.age = age;
        this.yop = yop;
        this.high_qual = high_qual;
        this.dob = dob;
    }
}

let student1 = new Student("naveen", "35", 2012, "PHD", 1980);
let student2 = new Student("Deepjyoti", 21, 2023, "B.Tech", 2001);


console.log(student1);
console.log(student2);

// obj2 = new Object();
// obj2.age = 21;
// console.log(obj2.prototype.__proto__); 