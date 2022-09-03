// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

//P: given 2 integer values, representing a quantity and a price
//R: we want to return the total cost of the mangos
//E:

function mango(quantity, price) {
    //declare total variable
    //multiply the two values and subtract (q/3 * price)
    let total = (quantity * price) - ((quantity / 3) * price)
    return total
}

console.log(mango(3, 3))//6
console.log(mango(9, 5))//30