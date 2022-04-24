//I have a cat and a dog.

//I got them at the same time as kitten/puppy. That was humanYears years ago.

//Return their respective ages now as [humanYears,catYears,dogYears]


function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0
    let dogYears = 0
    if(humanYears === 1){
        dogYears = 15
        catYears = 15
        return [humanYears, catYears, dogYears]
    }else if(humanYears === 2){
        dogYears += 24
        catYears += 24
        return [humanYears, catYears, dogYears]
    }else{
        catYears = 24
        dogYears = 24
        for(let i = 3; i <= humanYears; i++){
            catYears += 4
            dogYears += 5
    }
    return [humanYears, catYears, dogYears]
  }
}

console.log(humanYearsCatYearsDogYears(1)) // should output [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) // should output [2,24,24]
console.log(humanYearsCatYearsDogYears(10)) // should output [10,56,64]
console.log(humanYearsCatYearsDogYears(15)) // should output [15,76,89]
  