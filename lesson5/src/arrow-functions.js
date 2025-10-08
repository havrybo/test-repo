const sumArrayValues = (arr) => {
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
        } else {
            console.log(`Element '${element}' cannot be added`);
        }
    });

    return sum;
};

const numArray = [5, 10, 15];
const strArray = ['100', '200', 'apple'];

console.log('Sum of numbers (arrow):', sumArrayValues(numArray));
console.log('Sum of strings (arrow):', sumArrayValues(strArray));
