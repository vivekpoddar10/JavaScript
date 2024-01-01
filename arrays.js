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
