function sumArrayValues(arr) {
    if (!Array.isArray(arr)) {
        console.log('The provided value is not an array');
        return;
    }

    let sum = 0;

    arr.forEach((element) => {
        if (typeof element === 'number') {
            sum += element;
        } else if (typeof element === 'string' && !isNaN(Number(element))) {
            sum += Number(element);
        } else if (typeof element === 'boolean') {
            sum += Number(element);
        } else {
            console.log(`Element '${element}' cannot be added`);
        }
    });

    return sum;
}

const numArray = [1, 2, 3, 4, 5];
const strArray = ['10', '20', '30', 'notNumber'];
const mixArray = [3, '6', true];

console.log('Sum of numbers:', sumArrayValues(numArray));
console.log('Sum of strings:', sumArrayValues(strArray));
console.log('Sum of mixed values:', sumArrayValues(mixArray));
