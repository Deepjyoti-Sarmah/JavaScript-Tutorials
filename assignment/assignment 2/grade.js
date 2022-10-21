// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function grade(marks)
{
    if (marks > 90 && marks <= 100) {
        return "S grade";
    }else if (marks > 80 && marks <= 90){
        return "A grade";
    }else if (marks > 70 && marks <= 80){
        return "B grade";
    }else if (marks > 60 && marks <= 70){
        return "C grade";
    }else if (marks > 50 && marks <= 60){
        return "D grade";
    }else if (marks >= 40 && marks <= 50){
        return "E grade";
    }else if (marks >= 0 && marks < 40){
        return "Student has failed”";
    }else {
        return "Invalid maarks"
    }
}

let result = grade(52);
console.log(result);