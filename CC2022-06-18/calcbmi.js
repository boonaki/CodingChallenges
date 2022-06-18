// Write function bmi that calculates body mass index (bmi = weight / height^2).

//P: Given number values of height and weight]
//R: Return a string value based on bmi
//E:

function bmi(weight, height){
    //calc bmi
    //conditonals for return values
    let bmi = weight / height**2
    if(bmi <= 18.5){
        return 'Underweight'
    }else if(bmi <= 25.0){
        return 'Normal'
    }else if(bmi <= 30.0){
        return 'Overweight'
    }else{
        return 'Obese'
    }
}

console.log(bmi(80, 1.80))//"Normal"
console.log(bmi(50, 1.80))//"Underweight"
console.log(bmi(90, 1.80))//"Overweight"