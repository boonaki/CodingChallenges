// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P: array of directions in string, has to return back to starting point, no numbers or any surprising cases
//R: Return false if walk.length is !== 10 and if true, return true only if the walk returns you back to the starting point
//E:

function isValidWalk(walk){
    //create function that takes in count of a variable
    //return false if walk.length !== 10 and return true if count of ('n') is the same as count of ('s') and do same of 'e'/'w'
    function count(val){
        return walk.filter((dir) => dir == val).length
    }
    return walk.length===10 && count('n') == count('s') && count('e') == count('w')
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))//true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))//false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s','e']))//false

