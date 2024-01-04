/**
 * Sets are similar to arrays but contain unique values only
 * they can store values with different data type
 */

// defining a set
const orderSet = new Set(['Pasta', 'Pizza', 'Pasta']);
console.log(orderSet);

// set's methods
console.log(orderSet.size); //will return size of set
console.log(orderSet.has('Pizza')); //gives boolean result if set has that value
orderSet.add('Garlic Bread') // for adding new element
orderSet.delete('Pizza') // for deleting element

console.log(orderSet);

// looping over set
for(const item of orderSet){
    console.log(item);
}

// creatin sets from strings
console.log(new Set('vivek'));

// converting set into arrays
const myName = [...new Set('vivek')]
console.log(myName);
