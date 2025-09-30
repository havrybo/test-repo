const num1 = 10; 
const num2 = 5;  

const strNum = "6"; 
const strText = "apples"; 

const boolValue = true;

console.log("--- Operations on variables of the same type ---");

console.log(num1 + num2); 
console.log(num1 - num2); 
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num2 ** 2);

console.log("--- Modification and assignment ---");

let a = 10;
console.log(a);
a += 5; 
console.log(a);
a -= 10;
console.log(a); 
a *= 10; 
console.log(a); 

console.log("--- Operations on variables of different types ---");

console.log(num1 + strNum); 
console.log(num1 - strNum); 
console.log(num1 * strNum); 
console.log(num1 - strText);
console.log(num1 + boolValue);
console.log(num1 * !boolValue);

