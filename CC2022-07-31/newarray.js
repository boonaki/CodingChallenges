// Write a function that returns a new array consisting of elements which are multiple of their own index in input array

//P: given an array of whole numbers, positive or negative
//R: return a new array only consisting of the elements that are multiples of their own index
//E:

function mutiples(array){
    //filter
    //if math.floor(num/idx) === num/idx
    //also check if idx === 0
    //could also use modulo
    return array.filter((num,idx) => Math.floor(num/idx) === num/idx && idx !== 0)
}

console.log(mutiples([22,-6,32,82,9,25]))//[-6,32,25]
console.log(mutiples([68, -1, 1, -7, 10, 10]))//[-1, 10]