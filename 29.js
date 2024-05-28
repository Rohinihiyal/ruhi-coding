const input = require("readline-sync");
let n = input.questionInt("Enter any number: ");
  let i=0;
  let sum=0;
  while(n!=0)
  {
    p=n%10
    sum=sum+p
    n=Math.floor(n/10)
    p2=p%10
  }  
  console.log(sum)