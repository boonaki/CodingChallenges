// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

//given a string
//return a string either being 'Woohoo!' or 'Car Dead'
//E:

function bumps(str) {
    //define count
    //split string and loop through each char
    //if char is equal to 'n', increment count
    //return correct string if n is less than 15
    let count = 0
    str.split('').forEach((char) => {
        if (char === 'n') {
            count++
        }
    })
    return count <= 15 ? 'Woohoo!' : 'Car Dead'
}

console.log(bumps("__nn_nnnn__n_n___n____nn__nnn"))//'Woohoo!'
console.log(bumps("_nnnnnnn_n__n______nn__nn_nnn"))//'Car Dead'