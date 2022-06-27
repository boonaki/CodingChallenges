// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//P: Given an array of only boolean values (true/false)
//R: return the number of true values in the statement
//E:

function countSheep(arr){
    //filter all elements that are true
    //return length of filtered array
    return arrayOfSheep.filter((elem) => elem).length
}

console.log(countSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])) //17