
class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        let pi = Math.PI;
        let r = this.radius;
        let h = this.height;

        let vol =  ((pi * r * r * h)/3).toFixed(4);

        console.log("The volume of Cone is ", vol);
    }
}

let obj = new Cone(2,4);
obj.getVolume();
