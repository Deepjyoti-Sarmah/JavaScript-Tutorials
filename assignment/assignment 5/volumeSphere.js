class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        let pi = Math.PI;
        let r = this.radius;

        let vol =  (4/(3*(pi * r * r * r))).toFixed(4);

        console.log("The volume Sphere is ", vol);
    }
}

let obj = new Sphere(2);
obj.getVolume();
