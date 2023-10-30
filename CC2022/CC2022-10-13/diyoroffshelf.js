// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function. 

//given an array of subarrays, all subarrays of same length and containing strings
//return the array with the values shuffled

function shuffle(arr){
    //loop through array
    //find random value within random array
    //store value and return
    return arr.map((a) => {
        for(let i = 0; i < a.length; i++){
            let rO = Math.floor(Math.random() * arr.length)
            let rI = Math.floor(Math.random() * a.length)
            let temp = a[i]
            a[i] = arr[rO][rI]
            arr[rO][rI] = temp
        }
        return a
    })
}

console.log(shuffle([[1,2,3],[4,5,6],[7,8,9]]))//[[8,3,5],[2,4,9],[6,7,1]]