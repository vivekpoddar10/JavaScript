'use strict';

//similar to normal function
// but only difference is we call it with new keyword

/**
 * 1. new empty object is created
 * 2. this keyword referenced to the newly created object
 * 3. object is linked to the constructor function, i.e. all the property defined in the constructor function is attached to the object
 * 4. function automatically return object
 */

//defining the prototype
const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    /**
     * never create a method inside an constuctor object as shown below
     * as it will be attached to all the object created with the constructor function
     * we can use Prototype inheritance to define methods
    */
    // this.printName = function() {
    //     return `Hello ${this.firstName} ${this.lastName}`;
    // }
}

//creating a new object
const personObject = new Person('Vivek', 'Poddar');
console.log(personObject);


//check whether object is crea
console.log(personObject instanceof Person);

/**
 * Prototype
 *  -> All the function has a property called prototype
 *  -> If we declare any method in the prototype, all the object will have the access to it, but they don't have those method code written in them, thus it saves memory
 *  -> i.e. we are creating a library(Prototype property) for all the objects created from constructor function, where we can define as many method without making the objects bulky
 *  -> and that library will be shared by all the objects
 */ 
Person.prototype.printName = function(){
    return `'Hello, ${this.firstName} ${this.lastName}`
}
console.log(Person.prototype);
console.log(personObject.printName());
console.log(personObject.__proto__);

