//Write a greet function that when given a name, in type string, outputs a greeting with the first character of the string always capitalized

//given a string, always lowercase
//return a string as a greeting including the name with the first letter capitalized

function greet(name){
    name = name.replace(name[0], name[0].toUpperCase())
    return `Hello ${name}!`
}

console.log(greet('josh'))//'Hello Josh!'
console.log(greet('raymorious'))//'Hello Raymorious!'
