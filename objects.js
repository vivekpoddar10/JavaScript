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
myObj['bestFriend'] = function(friends){
    this.bfriend = friends[0]; // defining a new key which will have value from the function execution
    return this.bfriend;
}

myObj.bestFriend(myObj.friends)
// new key will only be available once we call that function, before that it will not exist
console.log(myObj);