//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    dist = dist*100
    let totalDist = dist
    for(let i = 1; i <= num_pill; i++){
      if(num_pill === 1){
        return 0
      }else if(num_pill === 2){
        return dist
      }
      else{
        totalDist += width + dist
        console.log(totalDist)
      }
    }
    return totalDist - (width*2) - (dist*2)
}

console.log(pillars(1, 10, 10)) //should output 0
console.log(pillars(2, 20, 25)) //should output 2000
console.log(pillars(11, 15, 30)) //should output 15270
