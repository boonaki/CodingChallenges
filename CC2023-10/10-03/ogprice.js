// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

//given a discounted price and a salePercentage as possible floats, always valid, always positive
//return the original price before the sales percentage was taken off, rounded to nearest 10th

function ogPrice(discounted, salePercent) {
   //og = dsct/1-prct
   return +(discounted / (1 - salePercent / 100)).toFixed(2);
}

console.log(ogPrice(75, 25))//100
console.log(ogPrice(25, 50))////50
console.log(ogPrice(75.75, 25))//101