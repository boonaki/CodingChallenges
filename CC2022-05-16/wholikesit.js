// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

//P: an array of strings, always be strings, always be in the same format (capitalization)
//R: return a new string with the names of the people that like it
//E:

function likes(name){
    //names.length === 1 return basic string
    //names.length === 2 return and string
    //names.length === 3 return ,and string
    //>=4 slice first 2, return first 2 and slicearr.length string
    if(names.length === 0){
        return "no one likes this"
    }
    if(names.length === 1){
        return `${names[0]} likes this`
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
        let first = names.splice(0,2)
        return `${first[0]}, ${first[1]} and ${names.length} others like this`
    }
}

console.log(likes(['John']))// 'John likes this'
console.log(likes(['John', 'Martha']))// 'John and Martha like this'
console.log(likes(['John', 'Martha', 'Matthew']))// 'John, Martha and Matthew Like this'
console.log(likes(['John', 'Martha', 'Matthew', 'Jeffery']))// 'John, Martha and 2 others Like this'


