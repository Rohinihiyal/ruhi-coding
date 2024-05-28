const input = require("readline-sync");
let u = input.questionInt("Enter the number ");
    if(u <= 50 ) 
    {
        a = u * 0.50 
        y = a *20/100
        t = y + a
        console.log(t)
    }
   else if(u <= 150 )
   {
       a = (150 * U) * 0.75
       y = a + (150 * 0.50)
       a1 = y * 20/100
       t = y + a1 
       console.log(t)
   }
   else if (u <= 250 )
   {
       a = (250 - u) * 1.20
       y = a + (50 * 0.50) + (100 * 0.75)
       a2 = y * 20/100
       t = y + a2
       console.log(t)
   }
else if(u <= 150 )
{
  a = (150 * U) * 0.75
  y = a + (150 * 0.50)
  a1 = y * 20/100
  t = y + a1 
  console.log(t)
}
else if (u <= 250 )
{
  a = (250 - u) * 1.20
  y = a + (50 * 0.50) + (100*0.75)
  a2 = y * 20/100
  t = y + a2
  console.log(t)
}
 else if (u < 350)
      {
        a = (350 - u) * 1.50
        y = a + (50 * 0.50) + (100 * 0.75 )+ (100 * 1.20)
        a3 = y * 20/100
        t = y + a3 
        console.log(t)
      }
        
