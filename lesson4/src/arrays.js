console.log('--- Creating arrays of different types ---');

const fruits = ['apple', 'banana', 'cherry'];
const numbers = [10, 20, 30, 40];
const bools = [true, false, true];
const mixed = [1, 'hello', true, null];

console.log(fruits);
console.log(numbers);
console.log(bools);
console.log(mixed);

console.log('--- Sorting fruits using forEach ---');

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

console.log('--- Using map on array of numbers ---');

const doubled = numbers.map(num => num * 2);
console.log(doubled);

console.log('--- Using filter ---');

const filtered = numbers.filter(num => num > 25);
console.log(filtered);

console.log('--- Using find ---');

const found = numbers.find(num => num > 15);
console.log(found);

console.log('--- Using sort ---');

const sortedFruits = [...fruits].sort();
console.log(sortedFruits);

console.log('--- Using concat ---');

const combined = numbers.concat(filtered);
console.log(combined);

console.log('--- Using includes ---');

console.log(fruits.includes('banana'));

console.log('--- Using join ---');

const fruitsString = fruits.join(', ');
console.log(fruitsString);
