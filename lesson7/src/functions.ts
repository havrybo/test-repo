function sumArrayValues(arr: (number | string | boolean)[]): number | undefined {
    if (!Array.isArray(arr)) {
        console.log('The provided value is not an array');
        return;
    }

    let sum = 0;

    arr.forEach((element: number | string | boolean) => {
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

const numArrayFun: number[] = [1, 2, 3, 4, 5];
const strArrayFun: string[] = ['10', '20', '30', 'notNumber'];
const mixArrayFun: (number | string | boolean)[] = [3, '6', true];

console.log('Sum of numbers:', sumArrayValues(numArrayFun));
console.log('Sum of strings:', sumArrayValues(strArrayFun));
console.log('Sum of mixed values:', sumArrayValues(mixArrayFun));
