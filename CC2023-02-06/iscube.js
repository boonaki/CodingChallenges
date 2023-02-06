// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

//given a volume and a side, the volume can be a float while the side will always be whole, both can be neg or pos
//return a boolean if the cuboid could have equal sides, return false otherwise

function cubeChecker(volume, side){
    //return if cube root of the num is equal to 
    //check if num is equal to length
    if(volume == 0) return false
    return Math.cbrt(Math.abs(volume)) === side
}

console.log(cubeChecker(56.3, 1), false)
console.log(cubeChecker(-1, 2), false)
console.log(cubeChecker(8, 2), true)