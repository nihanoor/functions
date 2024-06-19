
// arthematic operators 

function arthematic (a,b) {
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
    console.log (a++)
    console.log(a--)
    console.log(a)
   
   }
   arthematic(2,4);
   
   
   // square 
   
   function square(a){
       // console.log(a ** 2);
       return(a ** 2)
   
   }
   console.log(square(9));
   
   
   // max of two numbers
   
   function max(a, b) {
       return (a > b) ? a : b;
   }
   
   console.log(max(10, 5)); 
   
   
   
   
   // calculating intrest 
   
   function calculateInterest(amount, rate, years) {
       return amount * rate * years / 100;
   }
   
   console.log(calculateInterest(1000, 5, 3)); 