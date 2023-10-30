// There is a queue for the self-checkout stalls at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

//P: Given an array of positive integers, where each value represents a quantity of time and given a value n = number of checkout stalls
//R: return the amount of time it takes to run through each customer
//E:

function superMarketQ(customers,n){
    //fill array into variable with customers variable
    //loop for each customer
    //find idx of lowest integer in new array
    //increase the lowest value by current customer
    //return the highest value in new array
    let tills = new Array(n).fill(0);
    customers.forEach((customer) => {
        let idx = tills.indexOf(Math.min(...tills))
        tills[idx] += customer
    })
    return Math.max(...tills)
}

console.log(superMarketQ([10,2,3,3], 2))//10
console.log(superMarketQ([5,3,4], 1))//12
console.log(superMarketQ([2,2,3,3,4,4], 2))//9
console.log(superMarketQ([1,2,3,4,5], 100))//5
