// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

//P: an array and two numbers, always numbers, can be neg
//R: return true if numbers apear consecutively inside of given arr, false if not
//E:

function consecutive(arr, a, b){
    //loop through array, if number is === a
        //conditional next number after a is b
    let check = false
    arr.forEach((num,idx) => {
        switch (num){
            case a :
                if(arr[idx+1] === b || arr[idx-1] === b){
                    check = true
                }
                break;
            case b :
                if(arr[idx+1] === a || arr[idx-1] === a){
                check = true
                }
                break;
        }
    })
    return check
}

console.log(consecutive([1,3,5,7], 3, 7))//false
console.log(consecutive([1,3,5,7,9], 7, 9))//true
