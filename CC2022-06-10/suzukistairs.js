// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20. 

//P: given an array of arrays of whole positive numbers
//R: return an estimate of how many stairs he will climb in 20 years
//E: 

function stairsIn20(arr){
    //find sum of arrays inside array, and find sum of carrying array
    //multiply by 20 to get estimate
    return arr.reduce((acc,curr) => acc + curr.reduce((a,c) => a+c), 0) * 20
}

let stairs = [[20,30,40,50], [30,40,50,60], [40,50,60,70], [50,60,70,80], [60,70,80,90], [70,80,90,100]]
console.log(stairsIn20(stairs)) //28800