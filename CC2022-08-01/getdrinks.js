// write a function that returns the drink for certain patrons

// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

//P: given a single name, in type string
//R:return the drink meant for that specific person
//E:

function getDrinks(name){
    //create object for drinks
    //join and lower case string and grab value from object
    //if doesnt exist in object return anything's value (Beer)
    let outputs = {
        jabroni : "Patron Tequila",
        schoolcounselor :	"Anything with Alcohol",
        programmer :	"Hipster Craft Beer",
        bikegangmember :	"Moonshine",
        politician :	"Your tax dollars",
        rapper :	"Cristal",
        anything :	"Beer"
    }
    return outputs[name.split(' ').join('').toLowerCase()] ? outputs[name.split(' ').join('').toLowerCase()] : outputs.anything
}

console.log(getDrinks('Jabroni'))//Patron Tequila
console.log(getDrinks('bike ganG member'))//Moonshine
console.log(getDrinks('bowwow'))//Beer