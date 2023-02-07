// Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

//     1st octet 128 has the binary representation: 10000000
//     2nd octet 32 has the binary representation: 00100000
//     3rd octet 10 has the binary representation: 00001010
//     4th octet 1 has the binary representation: 00000001

// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

//given a string as an ip address (xxx.xx.xx.x)
//return the ip address converted into a 32 bit int

function ip4toInt32(n){
    //split string by dots
    //map array, convert each number to 8 digit binary

    let arr = n.split('.').map(e => {
        e = Number(e)
        return ("00000000"+e.toString(2)).slice(-8)
    }).join('')
    return parseInt(arr, 2)
}

console.log(ip4toInt32("128.21.10.1"), 2148862465)