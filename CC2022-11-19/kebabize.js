//given a string in camel case, always camel case
//return the string in lowercase and in kebab case (no numbers)

function kebabize(str) {
    //split string and filter out numbers
    //map split string and check if next character is uppercase, where if so add a '-' to the current elem
    //return joined string
    str = str.split('').filter(letter => parseInt(letter) != letter).map((e, idx, arr) => {
        if (isUpperCase(arr[idx + 1])) {
            e = e + '-'
        }
        return e.toLowerCase()
    })
    return str.join('')
}

function isUpperCase(elem) {
    if (elem) {
        elem = elem.charCodeAt(0)
        return elem > 64 && elem < 91
    }
    return
}

console.log(kebabize('myCamelCaseString'))//'my-camel-case-string'