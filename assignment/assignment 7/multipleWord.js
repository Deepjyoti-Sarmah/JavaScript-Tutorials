// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

function multiple(str) {
    let b = "";

    for(let i = 0; i<str.length; i++){
        if(str.charAt(i) == " "){
            b = b + "";
        }
        else {
            b += str.charAt(i);
        }
    }

    console.log(b);
}

multiple("Hi Boy");