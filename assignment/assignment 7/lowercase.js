// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.

const lowercase = (str) => {
    if (str.charAt(0).toLowerCase() === str.charAt(0)) {
        console.log(true);
    }else {
        console.log(false);
    }
}

lowercase("Deepjyoti");