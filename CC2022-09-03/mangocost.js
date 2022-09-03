// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

//P: given 2 integer values, representing a quantity and a price
//R: we want to return the total cost of the mangos
//E:

function mango(quantity, price) {
    //multiply price by the quantity subtracted by the rounded value of quantity/3
    return price * (quantity - Math.floor(quantity/3))
}

console.log(mango(3, 3))//6
console.log(mango(9, 5))//30
console.log(mango(2, 3))//6