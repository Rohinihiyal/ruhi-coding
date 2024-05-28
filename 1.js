const input = require("readline-sync");
let a = input.questionInt("Enter the number");
let b = input.questionInt("Enter the number");
let c = input.questionInt("Enter the number");
if(a>b)
{
   max=a
   min=b
}
else
if(a<b)
{
max=b
min=a
}
if(max>c)
{
    max1=max
    min1=c
}
else
{
    max1=c
    min1=max
    }
    if(max>min1){
        console.log(max)
    }else{
        console.log(min1)
    }



