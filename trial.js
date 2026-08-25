let A = 8;
let B = "4";
console.log(A == B);// true
console.log(A === B); // false
console.log(A != B);// false
console.log(A !== B); // true
console.log(A > B); // false
console.log(A < B); // false
console.log(A >= B); // true
console.log(A <= B); // true
console.log(typeof A); // number
console.log(typeof B); // string
if(A > 7 && A < 10) {
    console.log("A is between 7 and 10");
}else {
    console.log("A is not between 7 and 10");
}
let score = 123;
if(score > 100||score < 0) {
    console.log("Invalid score");
}
else if(score >= 80) {
    console.log("Grade: A");
} else if(score >= 75) {
    console.log("Grade: B+");
} else if(score >= 70) {
    console.log("Grade: B");
} else if(score >= 65) {
    console.log("Grade: C+");
}else if(score >= 60) {
    console.log("Grade: C");
}else {
    console.log("Grade: F")}