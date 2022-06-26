// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

//P: Given 3 number values (being, end and step), whole and pos
//R: return the sum of the integers starting at the begin and ending at end, increasing with step
//E:

function sequenceSum(begin,end,step){
    //check if begin > end
    //create sum variable
    //create loop 
    //starting point set to begin
    //conditional set to end
    //increasing by step
    //increase sum by i
    //return sum
    if(begin > end){
        return 0
    }
    let sum = 0
    for(let i = begin; i <= end; i+=step){
        sum+=i
    }
    return sum
}

console.log(sequenceSum(1,5,1))//15 (1 + 2 + 3 + 4 + 5)
console.log(sequenceSum(2,6,2))//12 (2 + 4 + 6)