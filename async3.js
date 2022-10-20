const getTimeClock = () => {
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
};

getTimeClock();

function getSynchronousMsg(){
    return "hello";
}
function getHelloFromAPromise(){
    return Promise.resolve
    ("Hello-promise");
}
function getHollaWithDelay(){
    return new Promise(function ( resolve, reject) {
        setTimeout(function(){
            resolve('hollA')
        },4000);
    });
}

async function caller(){


    const MessageHello = await getSynchronousMsg();
    console.log(getTimeClock(), MessageHello);


    const MessageHelloPromise = await getHelloFromAPromise();
    console.log(getTimeClock(), MessageHelloPromise);

    
    const MessageHolla = await getHollaWithDelay();
    console.log(getTimeClock(), MessageHolla);

    
}

caller();