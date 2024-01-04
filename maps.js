/**
 * Similar to object, store in key-value pair
 * but key can be of any data type
 */

const rest = new Map();

rest.set("name", "Classico Ittalino");
rest.set(1, "Lisbon, Portugal");

console.log(rest.set(2, "Firenze Itly"));

// defining more than 1 key-value pair together
rest
  .set("categories", ["Italian", "Pizzeria", "Organic", "Vegeterian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D");

console.log(rest);

rest.set([1,2], 'array key')

console.log(rest.get(true));
console.log(rest.has(1));
console.log(rest.size);
rest.delete(2)
//rest.clear()
console.log(rest);

// creating object in other way
const question = new Map([
    ['question', 'which is the best programmming language'],
    [1, 'c'],
    [2, 'JavaScript'],
    ['correct', 2]
]);
console.log(question);

// converting object to map
const resturant = {
    'sat':{
        'open':11,
        'close':23
    },
};
const myMap = new Map(Object.entries(resturant))
console.log(myMap);

//iterating map
for(const [key, value] of question){
    console.log(`key: ${key}, value:${value}`);
}

//converting map to array
console.log(...myMap);
console.log(...myMap.keys());
const value = myMap.values();
console.log(...value);