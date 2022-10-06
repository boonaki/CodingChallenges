// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string. 

//given a string and a number, always whole and always valid string
//return the string with every n'th character removed

function removeNth(str, n){
    //split string into new variable (retStr)
    //init nth variable as n
    //for each loop through string array
    //if(current index is === nth)
    //retStr = retStr.splice(index, 1)
    //nth * 2
    //return joined retStr
    let retStr = ""
    let nth = n-1
    for(let i = 0; i < str.length; i++){
        if(i === nth){
            nth+=n
        }else{
            retStr+=str[i]
        }
    }
    return retStr
}

console.log(removeNth("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))//"This is Halloween! This is Halloween!"
console.log(removeNth("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))//"The Bachelor is a terrible television show."