//The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

//You have to write a function that determine the number of magazines that every soldier has to have in his bag.

//You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

//PT92 - 17 bullets
//M4A1 - 30 bullets
//M16A2 - 30 bullets
//PSG1 - 5 bullets

//Example:

//["PT92", 6] => 2 (6 streets 3 bullets each)
//["M4A1", 6] => 1

//The return Will always be an integer so as the params.

function magNumber(info){
    const totalBullets = info[1]*3
    let magCount = 0
    if(info[0] === 'PT92'){
      magCount += totalBullets/17
    }else if(info[0] === 'M4A1'){
      magCount += totalBullets/30
    }else if(info[0] === 'M16A2'){
      magCount += totalBullets/30
    }else{
      magCount += totalBullets/5
    }
    return Math.ceil(magCount)
}
console.log(["PT92", 6]) //should output 2
console.log(["M4A1", 8]) //should output 1
console.log(["M16A2", 19]) //should output 2
console.log(["PSG1", 31]) //should output 19
console.log(["PT92", 19]) //should output 4
