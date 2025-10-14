const sumArrayValuesArrow = (arr: (number | string)[]): number | undefined => {
    if (!Array.isArray(arr)) {
        console.log('The provided value is not an array');
        return;
    }

    let sum = 0;

    arr.forEach((element: number | string) => {
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

const numArray: number[] = [5, 10, 15];
const strArray: string[] = ['100', '200', 'apple'];

console.log('Sum of numbers:', sumArrayValuesArrow(numArray));
console.log('Sum of strings:', sumArrayValuesArrow(strArray));
