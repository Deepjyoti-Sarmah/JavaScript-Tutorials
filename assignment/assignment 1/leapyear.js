let year = 2130; 

if ( (year % 4 == 0 && year != 100) || (year % 400 == 0)){
    console.log("leap year");
}else {
    console.log("not a leap year");
}