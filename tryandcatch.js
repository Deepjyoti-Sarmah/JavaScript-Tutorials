// let a = 0;
// if(a == 0){
//     throw new Error("enter a non zero value");
// }
// else{
//     console.log("this code works");
// }


try {
    // let a = 5;
    console.log("we are inside the try block");
    // blockchain();
      let a = 5/0;
      console.log(a);
} catch (error) {
    // console.log("something went wrong");
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("this code is always exectuted");
}