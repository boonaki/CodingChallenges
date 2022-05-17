//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

//P: 2 arrays, each element is a number. Check if each element in array 2 === (element in array1)^2
//R: return true or false
//E:

function comp(arr1,arr2){
    //method1:
    //loop through arr1
    //each loop check if num^2 is equal to a number in arr2
    //if true, remove number and add it to filtered arr
    //return if fitleredarr.length === arr1.length
    
    if(!arr1 || !arr2){
        return false
    }
    let filtered = []
    arr1.forEach((num) => {
        if(arr2.includes(num**2)){
        filtered.push(num)
        arr2.splice(arr2.indexOf(num**2),1)
        }
    })
      return filtered.length === arr1.length
    
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) //true
console.log(comp([4, 0, 6, 8, 10, 4, 6, 3, 5, 1, 4, 10, 3, 10, 4, 0], [100, 0, 16, 9, 36, 100, 1, 25, 9, 0, 64, 16, 16, 36, 100, 16])) //true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])) //false
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [])) //false