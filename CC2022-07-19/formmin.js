//write a function that takes in a list of digits, finds the smallest number that can be formed with the digits, using the digits only once (ignoring dupes)

//P: given an array of whole numbers, only positive
//R: return the smallest digit that can be formed using the list of numbers
//E:

function minimumForm(nums){
    //sort by smallest to largest
    //filter out duplicates
    //join array, convert to number and return
    nums = nums.sort((a,b) => a-b).filter((elem,idx) => nums.indexOf(elem) === idx)
    return +nums.join('')
}

console.log(minimumForm([1,3,1]))//13
console.log(minimumForm([4,7,5,7]))//457