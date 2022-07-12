// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

//P: given an array of strings: 'wolf' and 'sheep', no special characters, always 1 wolf in a given array
//R: return "Pls go away and stop eating my sheep" if wolf is at position 0
//   else, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N = sheep in front of wolf
//E:

function amongus(sheeps){
    //reverse sheeps
    //find index of wolf
    //if wolfindex is not equal to 0, position of wolf === N
    //input N into string and return
    
    //else return "Pls go away and stop eating my sheep"
    sheeps = sheeps.reverse()
    if(sheeps.indexOf('wolf') !== 0){
      return `Oi! Sheep number ${sheeps.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }else{
      return "Pls go away and stop eating my sheep"
    }
}

console.log(amongus(["sheep", "sheep", "sheep", "wolf", "sheep"]))//"Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(amongus(["sheep", "sheep", "sheep", "wolf"]))//"Pls go away and stop eating my sheep"