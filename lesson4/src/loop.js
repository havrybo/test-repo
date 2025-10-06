console.log('--- Loop from 0 to 9 ---');

for (let a = 0; a <= 9; a ++) {
    console.log(a);
}

console.log('--- Cycle from 100 to 0 in steps of 10 ---');

for (let b = 100; b >= 0; b -= 10) {
    console.log(b);
}

console.log('--- Cycle from 0 to 100 in steps of 5');

for (let c = 0; c <= 100; c += 5) {
    console.log(c);
}

console.log('--- While loop example 1 ---');
let a = 0;
while (a <= 5) {
    console.log(a);
    a++;
}

console.log('--- While loop example 2 ---');
let b = 10;
while (b >= 0) {
    console.log(b);
    b -= 2;
}

console.log('--- Do…while loop example 1 ---');
let c = 0;
do {
    console.log(c);
    c++;
} while (c <= 3);

console.log('--- Do…while loop example 2 ---');
let d = 5;
do {
    console.log(d);
    d--;
} while (d >= 0);
