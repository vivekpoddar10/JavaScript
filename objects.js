"use strict";

/***********************************************************************************************
 * Defining Object in JavaScript
 ***********************************************************************************************/

const myObj = {
  firstName: "Vivek",
  lastName: "Poddar",
  profession: "Engineer",
};

//fetching values stored inside objects
console.log(myObj.firstName);
console.log(myObj["firstName"]);

const nameKey = "Name";
console.log(myObj["first" + nameKey]);

/***********************************************************************************************
 * Adding new key-value in object
 ***********************************************************************************************/
myObj.location = "India";
myObj["Hobby"] = "Playing Cricket";
myObj.friends = ["Siddharth", "Ashish", "Vishal"];

console.log(myObj);
console.log(`${myObj.firstName} has ${myObj.friends.length} friends.`);

/***********************************************************************************************
 * Defining function inside object
 ***********************************************************************************************/
myObj.calcAge = function (birthYear) {
  return 2024 - birthYear;
};

console.log(myObj.calcAge(2000));

/***********************************************************************************************
 * storing the result of function in dictionary as new key-value pair
 ***********************************************************************************************/
// defined a function called bestfriend inside the object
myObj["bestFriend"] = function (friends) {
  this.bfriend = friends[0]; // defining a new key which will have value from the function execution
  return this.bfriend;
};

myObj.bestFriend(myObj.friends);
// new key will only be available once we call that function, before that it will not exist
console.log(myObj);

/***********************************************************************************************
 * Destructuring Objects
 ***********************************************************************************************/
const resturant = {
  name: "classico Italiano",
  location: "Via Angelio Tevanti 23, Firenze, Itly",
  categories: ["Italian", "Pizzeria", "Vagetarian", "orgainc"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// for destructuring object, just mention the key which you want to unpack inside curly brackets
// as there is no specific order in objects, we can unpack in any sequence
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

//unpacking by variables with different name from keys
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// setting default values to the variables
// in resturant object, there is no key by name of menu, so undefined will be printed if we fetch it.
const { menu = [], starterMenu: starter = [] } = resturant;
console.log(menu, starter);

//mutating variables
let a = 111;
let b = 222;
const obj = { a: 12, b: 23 };
({ a, b } = obj);
console.log(a, b);

//nested destrcturing
let {
  fri: { open: shopOpen, close: shopClose },
} = resturant.openingHours;
console.log(shopOpen, shopClose);

//passing object as argument inside a function
resturant.orderDelivery = function ({
  starterIndex = 1,
  mainIndex = 0,
  time = "20:00",
  location,
}) {
  console.log(`Order summary:
  ${this.starterMenu[starterIndex]},
  ${this.mainMenu[mainIndex]},
  ${time},
  ${location}`);
};

resturant.orderDelivery({ location: "Delhi" });

/***********************************************************************************************
 * Spread operator
 ***********************************************************************************************/

const resturantCopy = { ...resturant, owner: "Vivek Poddar" };
resturantCopy.name = "Copied Resturant";
console.log(resturantCopy);

/***********************************************************************************************
 * rest pattern
 ***********************************************************************************************/
// here we are destructuring the resturant object and storing the values in weekdays and weekend
// weekend will store the value of sat key
// weekdays will store of the values
const { sat: weekend, ...weekdays } = resturant.openingHours;
console.log(weekend, weekdays);

/***********************************************************************************************
 * Object literals
 ***********************************************************************************************/
const mode = ["one-day", "test", "t20"];
const cricket = {
  // instead of copy the value of some variable inside key i.e mymode: mode
  // we can create a key with similar name and value of a variable/array/obj, by just specifying its name, same as below
  mode,
  // instead of defining a function as: tournament: function(){...}
  // can be written as
  tournaments() {
    return ["one-day world cup", "t20 world cup", "champions trophy", "ict"];
  },
  //key name can be evaluated by an expression also
  [`day${2 + 4}`]: "friday", // similar to, day6:'friday'
};
console.log(cricket.day6);
