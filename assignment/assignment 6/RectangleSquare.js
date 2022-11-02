// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
    // 1. Add an area() method to the Rectangle class.
    // 2. Create a Square class that satisfies the following conditions:
        // ○ It is a subclass of Rectangle.
        // ○ It contains a constructor and no other methods.
        // ○ It can use the Rectangle class' area method to print the area
        // of a Square object.




class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    getArea() {
        return this.length * this.breadth;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

let RectangleArea = new Rectangle(6,4).getArea();
console.log(`Therefore the area of the Rectangle is ${RectangleArea} square units\n`);


let SquareArea = new Square(5).getArea();
console.log(`Therefore the area of the Square is ${SquareArea} square units`);