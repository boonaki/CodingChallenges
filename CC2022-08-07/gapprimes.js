// Write a function that returns the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `null`.

//P: given 3 whole number values (g,m,n) where m and n may not be prime but represent the start and end of the search respectively
//R: return the first pair of prime numbers between m and n that have a gap of g
//E:

function gap(g,m,n){
    //loop from m to n
    //check if current num is prime
    //if it is prime then add current number into pair array
    //if length of pair is === 2
        //check if reduce array is equal to g, if not then reset pair if it is then return pair
    let pair = []
    for(let i = m; i <= n; i++){
        if(isPrime(i)){
            pair.push(i)
            if(pair.length === 2){
                if(pair[1] - pair[0] === g){
                    return pair
                }else{
                    pair = [pair[1]]
                }
            }
        }
    }
    return null
}

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) return false;
    }
    return num > 1;
}

console.log(gap(2,100,110))//[101,103]
console.log(gap(4,100,110))//[103,107]
console.log(gap(6,100,110))//null
console.log(gap(8,300,400))//[359, 367]
