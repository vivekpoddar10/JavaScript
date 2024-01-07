/***********************************************************************************************
 * Defining Array in JavaScript
 ***********************************************************************************************/

const fruits = ["apple", 1, "orange"];

const years = new Array(1990, "2002");

console.log(fruits, years);

/***********************************************************************************************
 * Playing with array elements
 ***********************************************************************************************/

// changing the existing element at particular index
fruits[1] = "guava";

// adding new element into array
fruits[3] = "papaya";

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/***********************************************************************************************
 * Arrya methods
 ***********************************************************************************************/

//push() -> adds element at last
//       -> returns length of the array
fruits.push("mango");

//unshift()
fruits.unshift("water melon");

//pop() -> removes element from end
//      -> retruns removed element
fruits.pop();

//shift() -> removes element from start
//        -> return removed element
fruits.shift();

//indexOf(element) -> returns index of the element
fruits.indexOf("orange");

//includes(element) -> returns boolean result whether element is present or not
fruits.includes("mango");

/***********************************************************************************************
 * Destructuring Arrays
 * 
 *  -> destructuring means unpacking the values of array
 *  -> original array is not changed, we just store the values inside some variable
 ***********************************************************************************************/

const arr = [1,2,3,4];
let [x,y,z] = arr;
//here the assignment follows the index of array 
//output: x = 1, y=2, z=3
// 4 will not be assigned to any variable
// if we have to leave any element, just give a empty comma
console.log(x,y,z);

// swapping the values 
[y,x] = [x,y]; 
console.log(x,y);

//nested destructuring
const nested = [2,4,[5,6]];
const [a,,[b,c]] = nested;
console.log(a,b,c);

//assigining default values while destructuring
const [s=1,t=1,u=1] = [2,3];
console.log(s,t,u);

/***********************************************************************************************
* Spread operator

* Both destructure, and spread operator, unpacks the array's value
* In destructuring array, we store the value in differemt variable, and may want some or all the values
* But in spread operator, we just fetch all the values and passed them inside some function or array i.e making a copy. We don't store it inside any variable
 ***********************************************************************************************/
const newArr = [1,2,3];
const badArr = [newArr[0], newArr[1], newArr[2], 4,5];
console.log(badArr);

const goodArr = [...newArr, 4,5];
console.log(badArr, goodArr);

const joinArr = [...arr, ...newArr];
console.log(joinArr);

// passing array as an argument in a function, and fetching all the values
const orderPasta = function(item1, item2, item3) {
  console.log(`Here is the pasta with ingredints: ${item1}, ${item2}, ${item3}`);
}

orderPasta(...['onion', 'creram', 'chillies']);

/***********************************************************************************************
 * Rest Pattern
 * 
 *  -> collects different element and pack them inside an array
 ***********************************************************************************************/
// on right hand side: we make a new array by combining the values of two array, use spread operator
// on left hand side, we are destructuring the new array and storing the value inside variable
// variable first and second will store the values at index 0 and 1 respectively
// rest of the values will be stored in an array called restArray
const [first, second, ...restArray] = [...badArr, ...goodArr];
console.log(first, second, restArray);


/***********************************************************************************************
 * for-of loop
 *  -> instead of declaring variables and iterating the array
 *  -> we directly fetch the values
 ***********************************************************************************************/
for (const item of arr){
  console.log(item);
}

//.entries() returns an array with [index, value]
for (const [index, item] of arr.entries()){
  console.log(index, item);
}


/***********************************************************************************************
 * slice Method
 *  -> 
 *  -> 
 ***********************************************************************************************/
let alphabets = ['a', 'b', 'c', 'd', 'e'];
console.log(alphabets.slice(0,3));// will return an array containing element from index 0,1,2
console.log(alphabets.slice()); //will return whole array, similar to [...arr]

/***********************************************************************************************
 * splice Method
 *  -> similar to slice method, but the second parameter is the length/number of element you want to include
 *  -> mutate the original array
 ***********************************************************************************************/
console.log(alphabets.splice(1,1));

/***********************************************************************************************
 * reverse Method
 *  -> 
 *  -> mutate the original array
 ***********************************************************************************************/
console.log(alphabets.reverse());
console.log(alphabets);

console.log(alphabets.at(-1));


/***********************************************************************************************
 * for-each Method
 *  -> parameter: value, index, array
 *  -> return: void
 *  -> break, continue don't work in for-each loop
 *  -> used for simply looping the array
 ***********************************************************************************************/
const myval = alphabets.forEach(function(letters, index){
  letters += '0';
  console.log(letters);
})
console.log(alphabets);

/***********************************************************************************************
 * map Method
 *  -> parameter: value, index, array
 *  -> return: a new array
 *  -> If we want to perform some operation on the all elements of the array, and store the output of the operation in a new array
 ***********************************************************************************************/
const eurToUsd = 1.1;
const usdAmt = [40,12,23,45];
const eurAmt = usdAmt.map(function(amount){
  return amount*eurToUsd;
});
console.log(usdAmt);
console.log(eurAmt);


/***********************************************************************************************
 * filter Method
 *  -> parameter: value, index, array
 *  -> return: a new array
 *  -> If we want to filter the elements of the array on some condition, and store the output of in a new array
 ***********************************************************************************************/
const numbers = [0,-2,3,1,-4,10,5];
const positiveNum = numbers.filter(function(value){
  if(value >= 0) {
    return value;
  }
});
console.log(numbers);
console.log(positiveNum);

/***********************************************************************************************
 * reduce Method
 *  -> parameter: accumulator, value, index, array
 *  -> return: a single vale/ primitive type
 *  -> If we want to perform some operation on each elements and combine it with other element of the array and at last return the final value
 ***********************************************************************************************/
const sumOfNum = numbers.reduce(function(acc, value){
  return acc + value;
})
console.log(sumOfNum);