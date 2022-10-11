class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    static Create(gender){
        let name = gender == "Male" ? "John Doe" : "Jhony";
        return new Person(name);
    }
}


let name_gender = Person.Create("Male");
console.log(name_gender);

// let p1 = new Person("Jhon");
// console.log(p1.getName());