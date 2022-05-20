//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//P: length and width, always a number > 0
//R: return perimeter if rectangle and area if square
//E:
function areaOrPerimeter(l, w){
    return l === w ? l * w : (l*2)+(w*2)
}

console.log(areaOrPerimeter(6,18))//32
console.log(areaOrPerimeter(3,3))//9