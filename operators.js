/***********************************************************************************************
* AND Operator
    -> use any data type and return any data type
    -> If all values are true then only next code will be executed. The last truthy value is returned
    -> If any of the value is false, then the next code is not executed. The first falsy value is returned
***********************************************************************************************/
console.log(undefined && "vivek"); // output: undefined
console.log("vivek" && 10); // output: 10
/***********************************************************************************************
* OR Operator
    -> use any data type and return any data type
    -> if any of the value is true code is executed, the first truthy value is returned
    -> if no value is true, last falsy value is returned
***********************************************************************************************/
console.log(undefined || 0); //output: 0
console.log(0 || "vivek"); //output: vivek
/***********************************************************************************************
 * Ternary Operator
 ***********************************************************************************************/
/***********************************************************************************************
* Nullish Coalescing Operator
    -> similar to OR operator but it only consider null and unndefined values as falsy values
***********************************************************************************************/
console.log(0 ?? 10); // output: 0, or operator will give 10
console.log("" ?? "vivek"); //output: '', or operator will give 'vivek'
/***********************************************************************************************
 * Logical Assesment Operator
 ***********************************************************************************************/
let value = 0;
value = value || 10; // output: 10
// can we written as: value ||= 10
console.log(value);

value = 0
value = value && 10; // output: 0
// can we written as: value &&= 10
console.log(value);

value = 0
value = value ?? 10; // output: 0
// can we written as: value ??= 10
console.log(value);
