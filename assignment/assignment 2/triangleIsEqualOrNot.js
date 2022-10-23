// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

let aSize = 6;
let bSide = 4;
let cSide = 5;

function triangle(aSide, bSide, cSide) {
    if (aSide == bSide && aSide == cSide){
        console.log("It is a equilateral triangle");
    }else if((aSide == bSide && aSide != cSide) || (aSide != bSide && aSide == cSide) || (bSide == cSide && bSide != aSide)){
        console.log("It is a isosceles triangle");
    }else {
        console.log("It is a scalene triangle");
    }
}

triangle(aSize,bSide,cSide)