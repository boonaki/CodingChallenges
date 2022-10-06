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
    sillyCat(str)
}

// console.log(day1("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))//e!!Igv)tSlltBcvbdeDHEdVw!OOtI#Aa.ZMDuLWYpP^VVjDchISOiv#ylhgmQfs

/*******************/

function sillyCat(str){
    //find indexof 'c'
    //slice string from indexof c + 1 to -1
    //split remaining string by 'Eek!', reverse and join
    //return str
    let idx = str.indexOf('c')
    str = str.slice(idx+1, str.length).split('Eek!').join('').split(' ').map((elem) => elem = elem.split('').reverse().join('')).reverse().join('')
    decode(str)
}

// console.log(sillyCat("e!!Igv)tSlltBcvbdeDHEdVw!OOtI#Aa.ZMDuLWYpP^VVjDchISOiv#ylhgmQfs"))//[ 'fQmghly#', 'iOSIhcDjVV^PpYWLuDMZ.aA#ItOO!wVdEHDedb', '' ]

/*******************/

function decode(str){
    let key = ['S', 'p', 'a', 'c', 'e']
    for(let i = 0 ; i < str.length; i++){
        if(key.includes(str[i])){
            str = str.replace(str[i], " ")
        }
    }
    day4(str)
}

// let test = [ 'fQmghly#', 'iOSIhcDjVV^PpYWLuDMZ.aA#ItOO!wVdEHDedb', '' ].join('')
// console.log(decode(test))//fQmghly#iO Ih DjVV^P YWLuDMZ. A#ItOO!wVdEHD db

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
    console.log("|"+" ".repeat(back)+str+" ".repeat(front)+'|')
    // return "|"+" ".repeat(back)+str+" ".repeat(front)+'|'
}


/************ 
WHAT I HAVE SO FAR
|vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQf| <---'|' not included, meant to show where how many spaces there are

/*******************/