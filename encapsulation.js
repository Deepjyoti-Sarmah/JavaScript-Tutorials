class Alien{
    constructor(){
        let age, name;
    }

    setAge(age){
        this.age = age;
    }
    setName(name){
        this.name = name;
    }

    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

let a = new Alien();
a.setAge(12);
a.setName("Hox");

console.log(a.getAge());
console.log(a.getName());