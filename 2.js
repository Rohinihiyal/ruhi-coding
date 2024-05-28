const input = require("readline-sync");
let a = input.questionInt("Enter the number ");
let b = input.questionInt("Enter the number ");
let c = input.questionInt("Enter the number ");

if(a>b && a>c)
{
    largest=a;
}
else if(b>c && b>a)
{
    largest=b;
}
else
{
     largest=c;
}
    console.log(largest)