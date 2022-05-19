// You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

// So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
// People start giving you their orders.
// Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

// Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

// Task:

// Given a list of the times you need to brew each coffee, return the minimum total waiting time.
// If you get it right, you will get that raise your boss promised you!

//If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

//P: array of coffee orders in minuts, can be empty, only numbers
//R: return a single value
//E:

function barista(coffees){
    //sort coffees array
    //return sum from reduced array
    let sum = 0;
    let coffees = coffees.sort(function(a, b) {return a - b;});
    console.log(coffees);
    coffees.reduce(
    (previousValue, currentValue, currentIndex) => {
      var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
      console.log(waitTime);
      sum += waitTime;
      return waitTime;
    }, 0);
    return sum;
}

console.log(barista([4,3,2]))//first customer = 4(num), 2nd = 4(previous)+2(clean)+3(num), 3rd = 9(previous)+2(clean)+2(num)
//4 + 9 + 13 = 26