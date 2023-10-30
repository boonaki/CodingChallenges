// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

//P: given 2 arrays of lowercase characters, only alphabetical
//R: return the score where each matching character and index are +4 and -1 if doesnt match
//E:

function checkExam(answers,student){
    //create score variable
    //loop through answers array
    //check if student answer is not blank
    //if character at index of answers is equal to character at index of student
    //increase score by 4
    //else subtract 1
    //check if greater than 0 and return score
    let score = 0
    answers.forEach((elem,idx) => {
        if(student[idx] !== ''){
            elem === student[idx] ? score+=4 : score-=1
        }
    })
    return score > 0 ? score : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))//6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))//7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))//16