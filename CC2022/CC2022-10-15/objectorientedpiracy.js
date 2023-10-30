// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

//     draft - an estimate of the ship's weight based on how low it is in the water
//     crew - the count of crew on board

// var titanic = new Ship(15, 10);

// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt

// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false


//given a object factory constructor with 2 number values,never negative and always whole
//return a edited version of the given constructor, giving new objects the method that checks if a ship is worthy

function Ship(draft, crew){
    this.draft = draft
    this.crew = crew
    //add new method
    //init new variable as crew count time 1.5
    //ternary, returning if draft - new var is greater than 15, of which returning true, if not then return false
    this.isWorthIt = () => {
        let c = crew * 1.5
        return draft - c > 20 ? true : false
    }
}

let test1 = new Ship(15, 10)
let test2 = new Ship(132, 111)
let test3 = new Ship(66, 24)

console.log(test1.isWorthIt())//false
console.log(test2.isWorthIt())//false
console.log(test3.isWorthIt())//true