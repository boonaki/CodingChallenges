// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string

//P: given a valid URL as a string, could start with https, www, or the domain itself
//R: return the domain name of the given URL
//E:

function domainName(url) {
    if (url.split('')[0] !== 'h') {
        url = url.split('.')
        if (url[0] !== 'www') {
            return url[0]
        } else {
            return url[1]
        }
    } else if (url.split('//')[1].split('.')[0] === 'www') {
        return url.split('//')[1].split('.')[1]
    } else {
        url = url.split('//')
        let domain = url[1].split('.')
        return domain[0]
    }
}

console.log(domainName('http://google.com'))//google
console.log(domainName('www.xakep.ru'))//xakep
console.log(domainName('https://youtube.com'))//youtube