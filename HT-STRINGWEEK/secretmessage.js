day1("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs")

function day1(str){
    //create object with keys as numbers and values as the letter correction
    //convert object keys to array
    //split string and map array
    //check if current char is in object keys array
    //if so then convert char to property value
    //return char
    //return array
    let obj = {
        '0' : 'O',
        '1' : 'I',
        '2' : 'Z',
        '3' : 'E',
        '4' : 'h',
        '5' : 'S',
        '6' : 'G',
        '7' : 'L',
        '8' : 'B',
        '9' : 'q',

        'O' : '0',
        'I' : '1',
        'Z' : '2',
        'E' : '3',
        'h' : '4',
        'S' : '5',
        'G' : '6',
        'L' : '7',
        'B' : '8',
        'q' : '9',
    }
    let keys = Object.keys(obj)
    str = str.split('').map((char) => {
        if(keys.includes(char)){
            char = obj[char]
        }
        return char
    }).join('')
    day3(str)
}


/*******************/

// function day2(str){
//     //find indexof 'c'
//     //slice string from indexof c + 1 to -1
//     //split remaining string by 'Eek!', reverse and join
//     //return str
//     let idx = str.indexOf('c')
//     str = str.slice(idx+1, str.length).split('Eek!').join('').split(' ').map((elem) => elem = elem.split('').reverse().join('')).reverse().join('')
//     day3(str)
// }

/*******************/

function day3(str){
    let key = ['S', 'p', 'a', 'c', 'e']
    for(let i = 0 ; i < str.length; i++){
        if(key.includes(str[i])){
            str = str.replace(str[i], " ")
        }
    }
    day4(str)
}

/*******************/

function day4(str){
    //define count for back spaces to then be placed in the front once reversed
    //define count for front spaces to then be placed in the back once reversed
    //loop through string
    //if string is space, then increment frontcount and break once a character has been hit
    //loop through string but backwards and do same as above
    //trim and split string and reverse and join
    //add repeat space back amount of times then concat with string then repeat space front amount of times and return string
    let back = 0
    let front = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            front++
        }else{
            break;
        }
    }
    for(let i = str.length-1; i > 0; i--){
        if(str[i] === ' '){
            back++
        }else{
            break;
        }
    }
    str = str.trim().split(' ').map((word) => word = word.split('').reverse().join('')).reverse().join(' ')
    // console.log("|"+" ".repeat(back)+str+" ".repeat(front)+'|')
    day6(" ".repeat(back)+str+" ".repeat(front), 3)
    // return "|"+" ".repeat(back)+str+" ".repeat(front)+'|'
}


/************ 
WHAT I HAVE FROM DAY 4
|sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! | <---'|' not included, meant to show where how many spaces there are

/*******************/

function day6(str, n){
    let retStr = ""
    let nth = n-1
    for(let i = 0; i < str.length; i++){
        if(i === nth){
            nth+=n
        }else{
            retStr+=str[i]
        }
    }
    letterSwap(retStr)
}

function letterSwap(str){
    str = str.split('').map((char) => {
        let cc = char.charCodeAt(0)
        //if lowercase
        if(cc > 96 && cc < 123){
            let diff = cc - 'a'.charCodeAt(0)
            char = String.fromCharCode('Z'.charCodeAt(0) - diff)
        }else if(cc > 64 && cc < 91){
            let diff = cc - 'A'.charCodeAt(0)
            char = String.fromCharCode('z'.charCodeAt(0) - diff)
        }
        return char
    })
    // return str.join('')
    console.log(str.join(''))
    return
}