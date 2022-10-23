// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.\

//given 2 strings, one to be convered and a space-separated list of words that must always be lowercase except first word
//return a the first string in title case, with the words that are included in the list of words passed as the second parameter in lowercase

function titleCase(title, minorWords) {
    //check if title or minor is empty, return '' if so
    //split title
    //split minor list
    //run map loop
    //lowercase elem
    //check if first or is not included in minor list
    //make first letter of element uppercase
    //return elem
    //else
    //return elem
    //return joined array
    if (title === '') {
        return ''
    }
    title = title.split(' ')
    if (minorWords) {
        minorWords = minorWords.split(' ').map((word) => word.toLowerCase())
    }
    title = title.map((e, idx) => {
        e = e.toLowerCase()
        let temp = e.slice(0, 1)
        if (minorWords) {
            if (idx === 0 || !minorWords.includes(e)) {
                e = temp.toUpperCase() + e.slice(1)
            }
        } else {
            e = temp.toUpperCase() + e.slice(1)
        }
        return e
    })
    return title.join(' ')
}

console.log(titleCase('a clash of KINGS', 'a an the of'))//'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))//'The Wind in the Willows'
console.log(titleCase(''))//''