// promise internal states
// resolve
// reject
// pending

// async function f1(){
//     return 1;
//     // return Promise.resolve(1);
// }

// f1().then(console.log("success"));

async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000)
    });

    //promise always gets highest priority in execution
    let result = await promise;
    console.log(`success, the result is ${result}`);
    console.log("hello");
    console.log("blockchain");
}

f();