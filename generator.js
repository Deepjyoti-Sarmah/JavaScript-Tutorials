function *disp()
{
    console.log("hey");
    // yield "First pause";
    console.log("How");
    yield "second pause";
    console.log("are");
    yield 10+20;
    console.log("you?");
}
let control = disp();
// control.next();
// control.next();
// // control.next();
console.log(control.next());
console.log(control.next());