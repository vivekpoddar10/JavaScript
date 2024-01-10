'use strict';
//class expression
// const Person = class{

// };
//class declaration
class PersonCl{
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    //methods will be added to the PersonCl.prototype
    calcAge() {
        console.log(2024 - this.birthYear);
    }
}

const Vivek = new PersonCl('vivek', 2002);
console.log(Vivek);

//classes are not hoisted
//classes are first-class citizens, i.e. can be passes as an argument
//classes are executed in strict mode
