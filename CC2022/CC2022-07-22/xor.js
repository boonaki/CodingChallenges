// define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should be returning true if exactly one of the two expressions evaluate to true, false otherwise.

//P: given 2 boolean values
//R: return true if any of the two evaluate to true
//E:

function xor(a, b) {
    if(a === b){
      if(a === true && b === true){
        return false
      }else{
        return false
      }
    }else{
      return a === true|| b === true ? true : false
    }
}

console.log(xor(false,false))//false
console.log(xor(true,false))//true
console.log(xor(false,true))//true
console.log(xor(true,true))//false