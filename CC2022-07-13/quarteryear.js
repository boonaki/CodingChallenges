// Write a function that gives which quarter of the year that the month (in integer value) is in

//P: given an integer value 1-12
//R: return the quarter value 1-4 (int) for the corresponding month
//E:

function quarter(month){
    /*
    q1 : 1,2,3
    q2 : 4,5,6
    q3 : 7,8,9
    q4 : 10,11,12

    divide month by 12
    check if less than .25 and return 1
    check if greater than .25 and less than or equal to .5
    check if greater than .5 and less than or equal to .75
    return corresonding quarters
    */
    month = month / 12
    if(month <= 1/4){
      return 1
    }else if(month > 1/4 && month <= 2/4){
      return 2
    }else if(month > 2/4 && month <= 3/4){
      return 3
    }else{
      return 4
    }
}

console.log(quarter(3))//1
console.log(quarter(8))//3
console.log(quarter(4))//2
console.log(quarter(9))//4