// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

//given an array of strings, always valid (First Last)
//return an array of the collection of names equalling either hello kitty or barbie doll
//**have to use keywords: for, break and continue

function grabDoll(dolls) {
    //define bags array
    //loop for length of dolls
    //check if doll is equal to barbie or hello kitty
    //if so push current to bags array
    //check if length of bags array is less than 3
    //if not then break and return
    let bag = [];

    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
            bag.push(dolls[i])
            if (bag.length == 3) {
                break;
            }
            continue;
        }
    }

    return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"])
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"])
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"])