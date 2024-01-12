"use strict";
//class expression
// const Person = class{

// };
//class declaration
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  //methods will be added to the PersonCl.prototype
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const Vivek = new PersonCl("vivek", 2002);
console.log(Vivek);

//classes are not hoisted
//classes are first-class citizens, i.e. can be passes as an argument
//classes are executed in strict mode

//setter and getter methods
class ClassWithGetSet {
  msg = "hello world";
  get msg() {
    return this.msg;
  }
  set msg(x) {
    this.msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"

class Bank {
  constructor(name, address) {
    this._name = name;
    this.address = address;
  }
  set name(newName) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }
}

const myBank = new Bank("SBI", "New Delhi");
console.log(myBank.name);

//static method
Bank.hey = function(){
  console.log(`Hey there ${this.name}`);
}
Bank.hey();

class staticMethodClass {
  constructor(name){
    this.name = name;
  }
  static heyClass(){
    console.log(`Hey there ${this.name}`);
  }
}

staticMethodClass.heyClass();
const obj = new staticMethodClass('hello');
//obj.heyClass(); -> .heyClass() is not a function error will be thrown