//create a promise
//this is the executor function aka the promise
let promise  = new Promise(function(resolve , reject ) {
    //pretend it takes time to bring water
    // setTimeout(function(){
    //     //success condition 
    //     resolve("Hurray!Jack and Jill Back with water");
    // }, 2000);

    setTimeout(function() {
        reject(
            //throwing an error
            new Error("jack fall down and broke his crown, and jill came trumbling after")
        );
    }, 2000);

});

//consumer function the one which will receive promise
const grandParentCooking = () => {
    //then - will indicate promise has been fullfilled
    // promise.then(function(result){
    //     console.log(`Cooking the veges with the ${result}`);
    // });

    promise.catch(function(error){
        console.log(`omg ${error.message}`);
    });
};

grandParentCooking();