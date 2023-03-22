// Your mission is to implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

// Good luck :D

//given a string of characters representing a string form a form
//return the string with the given characters converted to their corresponding entity

function htmlSpecial(formData){
    //create hash object to check values and convert
    //split string, run map, join and return
    const hash = {
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '&' : '&amp;',
    }
    return formData.split('').map(e => hash[e] ? hash[e] : e).join('')
}