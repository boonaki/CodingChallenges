// Extract the age property from an array of objects which consist of lecturers and their ages. Lecturers = [{ name: ‘Jake’, age: 34 }, { name: ‘Betty’, age: 28 }, { name: ‘Francisca’, age: 45 }, { name: ‘Tapper’, age: 40 }].

//given an array of objects, properties of name and age, where age is a number and name is a string
//return an array of numbers, where the numbers are the age value of each person

function ageArray(array) {
    //map loop
        //set each current element to the age value of that element
    //return that mapped array
    let newarr = array.map(e => e = e.age);
    return newarr
}

console.log(ageArray([{ name: "Jake", age: 34 }, { name: "Betty", age: 28 }, { name: "Francisca", age: 45 }, { name: "Tapper", age: 40 }]), [34, 28, 45, 40])