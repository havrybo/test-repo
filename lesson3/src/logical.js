const a = 3;
const b = '5';
const d = undefined;
const bool = true;

console.log('--- Comparison operations ---');

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= 3);
console.log(a <= 2);

console.log('--- Logical operators AND (&&) ---');

console.log(a > b && b >= 5);
console.log(a < b && b >= 5);
console.log(bool && a === 3);

console.log('--- Logical operators OR (||) ---');

console.log(a > b || b >= 5);
console.log(a < b || b >= 5);
console.log(a > b || b < 5);
console.log((a > b || b < 5) && true);

console.log('--- Logical negation NOT (!) ---');

console.log(!(a > b));
console.log(!(a < b));
console.log(!bool);

console.log('--- Double negation (!!) ---');

console.log(!!a);
console.log(!!d);

const c = d ?? 'Other value';
console.log(c);
