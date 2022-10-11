//  console.log("Hello");

// class Person{
//     constructor(name, age, high_qual, desig, city, nationality, salary=100,gender="Female"){
//         this.name = name;
//         this.age = age;
//         this.high_qual = high_qual;
//         this.desig = desig;
//         this.city = city;
//         this.nationality = nationality;
//         this.salary = salary;
//         this.gender = gender;
//     }

//     greet(){
//         console.log(`hello ${this.name}, ${this.age},${this.high_qual},${this.desig}, ${this.city}, ${this.nationality}, ${this.salary}, ${this.gender}`);
//         // console.log(`${this.name}, ${this.age}`);
//     }
// }

// // let person1 = new Person("sanjeevan", 23, "B.tech", "Blockchain dev", "Bangalore", "Indian", "Good", "Male");
// // person1.greet();




// class Student extends Person
// {
//     constructor(name,high_qual, dob,college){

//         //super points to the construcutor of the parent class
//         //using super -> the derived classs mimics behaviour of parent class
//         super(name,high_qual);

//         this.name = name;
//         this.high_qual = high_qual;
//         this.dob = dob;
//         this.college = college;
//         // this.age = age;
//         // this.desig = desig;
//         // this.quali = quali;
//         // this.city = city;
//     }

//     greet_student(){
//         console.log(this.name);
//         console.log(this.high_qual);
//         console.log(this.dob);
//         console.log(this.college);
//         // console.log(this.age);
//         // console.log(this.desig);
//         // console.log(this.quali);
//         // console.log(this.city);
//     }
// }

// // let student1 = new Student("sanjeevan", 23, "B.tech", "Blockchain dev", "Bangalore", "Indian", 300000, "Male");
// // student1.greet();

// let student1 = new Student("deep", "B.tech", "24/01/2001", "AUS");
// student1.greet_student();



// let student2 = new Person("sanjeevan", 23, "B.tech", "Blockchain dev", "Bangalore", "Indian", 300000, "Male");
// student2.greet();


// class Child extends Student
// {

// }

// let child1 = new Child("Deep", 21, "B.tech", "Blockchain dev", "Bangalore", "Indian", 300000, "Male");

// child1.greet();

// create a car class name , brand ,com, total_sales
// child classes - engine, transmision, susspension, seatting capacity, price, yol

class Car{
    constructor(names, brand, com, total_sales){
        this.names = names;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;
    }

    info(){
        console.log(this.names, this.brand, this.com, this.total_sales);
    }
}

class Engine extends Car {
    constructor(names,brand,com, total_sales, engine){

        super(names,brand,com);

        this.names = names;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;

        this.engine = engine;
    }

    info_eng(){
        console.log(this.names, this.brand, this.com, this.total_sales,this.engine);
    }

}



class Transmision extends Car {
    constructor(names,brand,com, total_sales, transmision){

        super(names,brand,com);

        this.names = names;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;

        this.transmision = transmision;
    }

    info_trans(){
        console.log(this.names, this.brand, this.com, this.total_sales,this.transmision);
    }
    
}


class Susspension extends Car {

    constructor(names,brand,com, total_sales, susspension){

        super(names,brand,com);

        this.names = names;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;

        this.susspension = susspension;
    }

    info_sus(){
        console.log(this.names, this.brand, this.com, this.total_sales,this.susspension);
    }
    
}
class Seatting extends Car {

    constructor(names,brand,com, total_sales, seating){

        super(names,brand,com);

        this.names = names;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales;

        this.seating = seating;
    }

    info_seat(){
        console.log(this.names, this.brand, this.com, this.total_sales,this.seating);
    }
    
}

// class Price extends Car {
    
// }

// class YOL extends Car {
    
// }


let car1 = new Car("ASS", "BMW", "Ger", 2300);
// car1.info();

let eng1 = new Engine("ASS", "BMW", "Ger", 2300,"V8")
eng1.info_eng();
eng1.info();