//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

console.log(usdcny(15)) //should output '101.25 Chinese Yuan'
console.log(usdcny(465)) //should output '3138.75 Chinese Yuan'
console.log(usdcny(2400)) //should output '16200.00 Chinese Yuan'