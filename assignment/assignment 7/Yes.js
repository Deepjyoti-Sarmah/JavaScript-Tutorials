// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.

const correct_verdict = (str) => {
    if(str.includes("Y") || str.includes("y") && str.includes("E") || str.includes("e") && str.includes("S") || str.includes("s")){
        return "Correct Verdict";
    }else {
        return "Incorrect";
    }
}

console.log(correct_verdict("YES"));