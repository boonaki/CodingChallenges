// you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).
//Equation will be the form of ax^2 + bx + c = 0
//Since there are infinitely many solutions to this problem, we fix a = 1.
// Remember, the roots can be written like (x-x1) * (x-x2) = 0


//given 2 numbers, x1 and x2, always whole but may be negative or positive.
//return an array of 3 numbers that represent the coefficients 

function quadraticCoef(x1, x2) {
   //define a as 1
   //define b as (x1+x2) * -1
   //define c as product of of x1 and x2
   //return [a,b,c]
   const a = 1;
   const b = (x1 + x2) * -1;
   const c = x1 * x2;;

   return [a, b, c]
}

console.log(quadraticCoef(1, 2))//[1, -3, 0]