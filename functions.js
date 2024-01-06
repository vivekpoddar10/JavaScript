"use strict";

/***********************************************************************************************
 * Function Declaration
 *
 * These functions can be called before there declaration by using hoisting
 ***********************************************************************************************/
function fruitProcessor(apple, orange) {
  return `${apple} apple, and ${orange} oranges`;
}

/***********************************************************************************************
 * Function Expression
 ***********************************************************************************************/
const fruitProc = function (apple, orange) {
  return `${apple} apple, and ${orange} oranges`;
};

/***********************************************************************************************
 * Arrow function
 *
 * 'this' keyword is not available inside arrow function
 ***********************************************************************************************/
const processor = (apple, orange) => `${apple} apple, and ${orange} oranges`;
console.log(processor(4, 5));

/***********************************************************************************************
 * Calling one function inside another function
 ***********************************************************************************************/
const cutFruit = function (fruit) {
  return fruit * 4;
};

const fruitSalad = function (apple, guava, orange) {
  return `fruit salad:
        apple: ${cutFruit(apple)}
        guava: ${cutFruit(guava)}
        orange: ${cutFruit(orange)}`;
};

console.log(fruitSalad(2, 3, 4));

/***********************************************************************************************
 * Default parameters
 ***********************************************************************************************/
const bookings = [];
const createBooking = function (
  flightNum = "LH123",
  passengerNum = 1,
  price = 100 * passengerNum
) {
  const myBookings = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(myBookings);
  bookings.push(myBookings);
};
createBooking();
createBooking("air", 2, 500);
createBooking(undefined, 2, 100); //we can't skip a precedding argument, to use default argument use undefined

/***********************************************************************************************
 * Pass by value, pass by reference
 * JS supports pass by value,
 * however if we pass an object or array as an argument in a function, then performing operation on them affects the original
 ***********************************************************************************************/

const flight = "LH123";
const vivek = {
  name: "Vivek Poddar",
  passport: 1234567,
  age: 12,
};
const arr = [];

const checkIn = function (flight, obj, arr) {
  flight = "AI000";
  obj.name = "Mr. " + obj.name;
  obj.passport = "0000000";
  arr.push(1);
};
checkIn(flight, vivek, arr);
console.log(vivek);
console.log(arr);

/***********************************************************************************************
 * First class function - treating function as a value
 * i.e, storing them inside a variable
 *          const myFunc = function(){}
 *      storing them in key-value pair in object
 *          const myObje = {
 *              calc: function(){}
 *          }
 *      passing them as argument in some other function
 *      function returning another function
 ***********************************************************************************************/


/***********************************************************************************************
*callback function
    //function calling another function as an argument
 ***********************************************************************************************/

const num = [1, 2, 3, 4, 5];

const calcSum = function (array) {
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum;
};

const findSum = function (array, fn) {
  console.log(`finding the sum of ${[...array]} using ${fn.name}`);
  console.log(calcSum(num));
};
findSum(num, calcSum);

//function returning another function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("hello")("vivek");


/***********************************************************************************************
 * call(), apply(), bind()
        //they are used to set the this keyword of a function to an object
        //ideally function's this keyword is undefined
        // if we want to use the function with this keyword, we have to set it
        // or, if we want to use the function defined inside some other object, we have to change the reference of this keyword
        // call and apply function takes an object as argument and sets the this keyword of the function the object
        // bind function also does the same, but it return a new function with this refernced to the passed object
        // bind are used generally as callback function
 ***********************************************************************************************/


const lufthansa = {
  airline: "Lufthansa Airline",
  iataCode: "LX",
  bookings: [],
  book(flightNum, psgName) {
    this.bookings.push(
      `Airline: ${this.airline}, flight no.: ${flightNum}, passenger: ${psgName}`
    );
    console.log(this.bookings);
  },
};

const swiss = {
  airline: "Swiss Airline",
  iataCode: "SW",
  bookings: [],
};

const myBookings = lufthansa.book;
myBookings.call(swiss, 123, "vivek");
myBookings.apply(swiss, [234, "Vishal"]);
console.log(swiss);

const swissBook = lufthansa.book.bind(swiss);
swissBook(200, "ankit");

const addVAT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addVAT(0.1);
console.log(addVAT2(100));

console.log(addVAT(0.1)(100));

const poll = {
  answers: new Array(4).fill(0),
  registerNewAnswer(answer) {
    if (answer >= 0 && answer <= 3) {
      this.answers[answer]++;
    }
  },
};
poll.registerNewAnswer(12);
console.log(poll);

/***********************************************************************************************
*closures in JS
    // It basically means that any function will have access to its local memory, as well as, the local memory of it's parent function
 ***********************************************************************************************/
const increase = function() {
    let a = 10;
    return function() {
        a++;
        console.log(a);
    };
}

const inc1 = increase();
// after the call of increase(), the execution context of increase will be removed from call stack
// i.e. a variable defined inside increase() doesn't exist
// when we call inc1(), is uses a which was defined in the local memory of increase(), which don't exist now
//but with help of closure, inc1() will have the reference of varaible a, and can manipulate it
inc1(); //output: 11
inc1();//output: 12
inc1();//output: 13
