// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

function truncate(str) {
    let len = str.length;

    if(len > 4) {
        str = str.substring(0, 4);
    }

    console.log(str);
}

truncate("Icecream");