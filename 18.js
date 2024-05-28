const input = require("readline-sync");
let s = input.questionInt("Enter the number ");
if(s <= 10000)
{
    bs = s + s*20/100 + s*80/100 ;
       console.log(bs);
}
else if(s <= 20000)
{
      bs = s + s * 25/100 + s * 90 /100 ;
       console.log(bs)
}
else if(s > 20000)
{
    bs = s + s * 30/100 + s * 95/100 ;
    console.log(bs)
}
    