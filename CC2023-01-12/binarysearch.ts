//Your task is to find a needle in a haystack, where the haystack is an array and the needle representing a number, and return true if the needle is in the haystack, otherwise return false. The inputs are always valid.

//Given an array and a number to find
//Return true if the number is inside of the array, false if not

function bs_list(haystack: number[], needle: number): boolean {
    //define low and high, where low is 0 and the high is the length of the array
    //while lo is less than high
    //find the half way point by finding the sum of low + (high-low)/2 to be the index
    //set the current element with the found index
    //check if the current element is the needle, where if so then return true
    //if the current element is greater than the needle, then set the high to be the found half way point
        //because everything greater than the current is no longer needed
    //else (current is less than needle), then reassign lo to be the halfway point + 1
        //this is because lo is exclusive and the high in inclusive.
    //if not found then return false

    let lo: number = 0
    let hi: number = haystack.length

    do {
        const m: number = Math.floor(lo + (hi - lo)/2)
        const v: number = haystack[m]

        if(v === needle){
            return true
        }else if(v > needle){
            hi = m
        }else{
            lo = m + 1
        }

    } while(lo < hi);

    return false
}

console.log(bs_list([1,2,4,7,8,12,21], 12))//true
console.log(bs_list([1,2,4,7,8,12,21], 3))//false