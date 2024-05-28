const input=require("readline-sync");
let A = input.questionInt("Enter first number: ");
let B = input.questionInt("Enter second number: ");
A=A+B
B=A-B
A=A-B
console.log(A,B)