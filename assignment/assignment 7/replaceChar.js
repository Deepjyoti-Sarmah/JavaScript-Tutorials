// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

const replaceX = (str) => {
    let b = "";

    for(let i = 0; i< str.length; i++) {
        if(str.charAt(i) == "a"){
            b+= "x";
        }else {
            b+= str.charAt(i);
        }
    }

    return b;
}

console.log(replaceX("apple"));