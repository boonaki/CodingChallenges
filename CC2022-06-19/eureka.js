//The number 89 is the first integer with more than one digit that fulfills the property. 
//In effect: 89 = 8^1 + 9^2
//The next number in having this property is 135.
//See this property again: 135 = 1^1 + 3^2 + 5^3

//We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive)
//and outputs a list of the sorted numbers in the range that fulfills the property described above.

//P: Given a two number values, no surprise cases
//R: return a sorted array of the numbers that meet the property
//E:

function sumDigits(a,b){
  //create empty array
  //loop to add to array
  //split each number
  //reduce each number
  //push to empty array if reduce number === original number
  let arr = [];
  while(a <= b){
    if(a.toString().split('').reduce((acc,curr,idx)=>acc + +curr ** (idx + 1),0) == a){
      arr.push(a)
    }
    a++
  }
  return arr;
}

console.log(sumDigits(1,10))//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigits(10,100))//[89]
console.log(sumDigits(90,100))//[]
