// class Person{
//     constructor(name){
//         this.name = name;
//         this.occq = "web dev";
//     }
//     greet(){
//         console.log(`Hello ${this.name}, occupation is ${this.occq}`);
//     }    
// }

// class Student extends Person{
//     constructor(name){
//         super(name);

//         this.occq = "Blockchain Dev";
//     }

//     // greet(){
//     //     console.log(`Hello student ${this.name}, occupation is ${this.occq}`);
//     // }
// }

// let obj1 = new Person("Deep");
// obj1.greet();

// let obj2 = new Student("Deepjyoti Sarmah");
// obj2.greet();

//function A - objects in paameter
//funtion B - working with object1 or working with properties of function A 

//constructor factoory

//base function 
function Animal(value){
    var obj = {}; //create an empty object 
    obj.name = value.name; // to assign a new attribute to the object obj as name
    return obj; //return the value of the object;
};

//derived function
function Dog(value){
    var obj = Animal(value);

    obj.greet = function(){
        return `Hello , ${obj.name}`;
    };
    return obj;
};

var myCuteDog = Dog({name: "Snoop"});
console.log(myCuteDog.greet());


//backend 
// that= {
//     name : value
// }