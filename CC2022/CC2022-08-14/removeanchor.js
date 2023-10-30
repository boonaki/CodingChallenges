// Write a function so that it returns the url with anything after the anchor (#) removed. 

//P: given a url string, never empty
//R: return the url with anything after the # is removed
//E:

function removeAnchor(url){
    return url.split('#')[0]
}

console.log(removeAnchor('https://www.boonaki.me/#hero'))//https://www.boonaki.me/
console.log(removeAnchor('https://www.boonaki.me/dev#about'))//https://www.boonaki.me/dev
console.log(removeAnchor('https://www.boonaki.me/#contactme'))//https://www.boonaki.me/