//Write a function which returns the weekday according to the input number:
    // 1 returns "Sunday"
    // 2 returns "Monday"
    // 3 returns "Tuesday"
    // 4 returns "Wednesday"
    // 5 returns "Thursday"
    // 6 returns "Friday"
    // 7 returns "Saturday"
    // Otherwise returns "Wrong, please enter a number between 1 and 7"

//P: given a single digit whole number, always postive
//R: return the day of the week in type string based on the number given
//E:

function weekday(num) {
    //create object with numbered property values and respective days
    //return the property value of the given number
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    }
    return days[num] ? days[num] : 'Wrong, please enter a number between 1 and 7'
}

console.log(weekday(1))//"Sunday"
console.log(weekday(2))//"Monday"
console.log(weekday(3))//"Tuesday"
console.log(weekday(8))//"Wrong, please enter a number between 1 and 7"