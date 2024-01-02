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