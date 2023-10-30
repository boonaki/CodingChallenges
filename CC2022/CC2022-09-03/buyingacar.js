// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

//P: given 4 integer/float values, startprice of old car, starprice of new car, how much he can save per month, and how much the price depreciates as a percent
//R: return an array with two values: the amount of months it will take him to save and the money left over after buying the car
//E:

function buyMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    //declare months counter to 0
    //declare available to 0
    //while startpriceNew is greater than startprice old + available
    //add saving per month to available
    //divide percentloss per month by 100 to get percent in decimal, then multiply that value by startpriceold and set that new value to old price
    //repeat for new price
    //if months counter % 2 === 1
    //increment percent by .5

    //return [monthscounter, rounded(oldprice + avaialable - newpprice)]
    let months = 0, avaialable = 0;
    while (startPriceNew > startPriceOld + avaialable) {
        avaialable += savingPerMonth;
        startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
        startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
        months++;
        if (months % 2 == 1) {
            percentLossByMonth += .5;
        }
    }
    return [months, Math.round(startPriceOld + avaialable - startPriceNew)];
}

console.log(buyMonths(2000, 8000, 1000, 1.5))//[6,766]
console.log(buyMonths(12000, 8000, 1000, 1.5))//[0,4000]