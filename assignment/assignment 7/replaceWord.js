// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

const replace = (str) => {
    let b = "";
    let ans = "";

    for(let i = 0; i<str.length; i++) {
        if (str.charAt(i) == " ") {
            ans = b + " " + ans;
            b = "";
        }else {
            b += str.charAt(i);
        }
    }

    ans = b + " " + ans;
    console.log(ans);
}

replace("Hi Boy");