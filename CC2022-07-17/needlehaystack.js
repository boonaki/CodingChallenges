// Write a function findNeedle() that takes an array full of junk but containing one "needle"

//P: given an array of elements, of any value and type
//R: return the index of which the string 'needle' sits at in a string as "found the needle at position n"
    //if no needle, return "Your function didn't return anything"
//E:

function findNeedle(array){
    //find indexOf "needle"
    //if indexOf "needle" is greater than/equal to 0 return "found the needle at position _"
    //else return "Your function didn't return anything"
    let needle = haystack.indexOf('needle')
    return needle >= 0 ? `found the needle at position ${needle}` : `Your function didn't return anything`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))//'found the needle at position 5'
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))//'found the needle at position 3'
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))//'found the needle at position 5'
