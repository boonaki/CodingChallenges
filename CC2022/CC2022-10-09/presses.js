// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// For this assignment, write a function that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience). "WHERE DO U WANT 2 MEET L8R" --> 47

//given a phrase in type string, always a valid string, could contain numbers
//return a number representing the amount of button presses to type the sentence

function countPress(phrase){
    //store strings of buttons
    //uppercase and split phrase
    //init count
    //foreach letter in phrase
    //filter the buttons to which that includes the current chararcter and store into var
    //add indexof letter + 1 into count
    //return count
    let btns = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0']
    let count = 0
    phrase = phrase.toUpperCase().split('')
    phrase.forEach((letter) => {
        let char = btns.filter((lett) => {
            return lett.indexOf(letter) > -1
        })[0]
        count += char.indexOf(letter) + 1
    })
    return count
}

console.log(countPress("LOL"))//9
console.log(countPress("HOW R U"))//13