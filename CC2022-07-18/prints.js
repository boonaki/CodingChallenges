// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. 

//P: given two integer values, whole numbers, negative and positive
//R: return a whole integer value representing the number of pages you need (n * m) where students are represented as 'n' and number of pages needed per student represented as 'm'
//E:

function pages(n,m){
    //check if n or m are greater than 0, if they are then multiply n & m and return, else return 0
    return n > 0 && m > 0 ? n * m : 0
}

console.log(pages(5,5))//25
console.log(pages(-5,5))//0
console.log(pages(3,6))//18