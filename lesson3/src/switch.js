const num = 3;
console.log('--- Checking the value of variable num ---');

switch (num) {
    case 1:
        console.log('num === 1');
        break;
    case 2:
        console.log('num === 2');
        break;
    case 3:
        console.log('num === 3');
        break;
    default:
        console.log('num does not match any case');
}

const color = 'red';
console.log('--- Checking the value of variable color ---');

switch (color) {
    case 'blue':
        console.log('color === blue');
        break;
    case 'green':
        console.log('color === green');
        break;
    case 'red':
        console.log('color === red');
        break;
    default:
        console.log('color does not match any case');
}

const isLoggedIn = false;
console.log('--- Checking the value of variable isLoggedIn ---');

switch (isLoggedIn) {
    case true:
        console.log('User is logged in');
        break;
    case false:
        console.log('User is not logged in');
        break;
    default:
        console.log('Unknown user state');
}

