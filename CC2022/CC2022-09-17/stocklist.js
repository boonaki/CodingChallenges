// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category

//P: given an array of consistent strings and categories represented by capital letters
//R: return the stock list with the amount of books for each given category in type string
//E:

function stockList(listOfArt, listOfCat) {
    //create object
    //loop through list of art
    //split string by spaces
    //store first character of strings in object, only if it is included in listOfCat
    //make number value the property value, where if it exists, make property value sum of current number value and previous
    //loop through object to create template array for string
    //join array by '-' and return
    let obj = {}
    let returnStr = []

    listOfCat.forEach((elem) => {
        obj[elem] = 0
    })

    listOfArt.forEach((elem) => {
        elem = elem.split(' ')
        let firstChar = elem[0].split('')[0]
        if (listOfCat.includes(firstChar)) {
            obj[firstChar] += +elem[1]
        }
    })
    for (key in obj) {
        returnStr.push(`(${key} : ${obj[key]})`)
    }
    return listOfArt[0] ? returnStr.join(' - ') : ''
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))//"(A : 0) - (B : 1290) - (C : 515) - (D : 600)"