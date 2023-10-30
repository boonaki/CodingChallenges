// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//P: given a width, height and depth of a box as numbers
//R: return an array with the total surface area and volume of the box [a,b]
//E:

function surfaceVolumeCalc(width, height, depth){
    //surface area = 2*length*width + 2*length*height + 2*width*height
    //volume = length * width * height
    return [(2*width*height)+(2*width*depth)+(2*height*depth),width*height*depth]
}

console.log(surfaceVolumeCalc(4,2,6))//[88,48]
console.log(surfaceVolumeCalc(10,10,10))//[600,1000]