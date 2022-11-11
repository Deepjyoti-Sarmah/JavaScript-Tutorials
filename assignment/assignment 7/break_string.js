// 7. How can you break a string to a newline in Javascript ?

function breaks(str) {
    let b = "";
    let c = "";

    let n = str.length;

    for(let i = 0; i< n/2; i++){
        b += str.charAt(i);
        c += str.charAt(i+n/2);
    }

    console.log(b);
    console.log(c);
}

breaks("Deepjyoti");