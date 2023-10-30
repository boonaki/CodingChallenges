//Create a class, where within the constructor method accept a name in type string, age in type number, with a property to see both in a string

//given a name a string
//create a class constructor that creates a new object with properties

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        this.info = `${this.name}s age is ${this.age}`
    }
}

var john = new Person('john', 34)
console.log(john.name,'|', john.age,'|', john.info)