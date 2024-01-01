/***********************************************************************************************
 * Function Declaration
 * 
 * These functions can be called before there declaration by using hoisting
 ***********************************************************************************************/
function fruitProcessor(apple, orange){
    return `${apple} apple, and ${orange} oranges`;
}

/***********************************************************************************************
 * Function Expression
 ***********************************************************************************************/
const fruitProc = function(apple, orange) {
    return `${apple} apple, and ${orange} oranges`;
};

/***********************************************************************************************
 * Arrow function
 * 
 * 'this' keyword is not available inside arrow function
 ***********************************************************************************************/
const processor = (apple, orange) => `${apple} apple, and ${orange} oranges`;

/**
 * excercise
 */
const calcAge = function(year) {
    return 2023 - year;
};

const retirementYear = function(birthYear, name) {
    const age = calcAge(birthYear);
    const retireYear = 65 - age;
    if (retireYear > 0) {
        return `${name} will retire after ${retireYear} years`;
    } else {
        return `${name} has already retired`;
    }
};

console.log(retirementYear(1950, 'vivek'));

const calcSum = function(...num) {
    return num.reduce((acc, sum) => acc+sum);
}
console.log(calcSum(1,2,3,4,5,6));