const age = 19;
const hasPermission = true;

console.log('--- Checking access based on age and permission ---');

if (age >= 18 && hasPermission) {
    console.log('Access Approved');
} else {
    console.log('Access Denied');
}

const score = 93;

console.log('--- Evaluating score category ---');

if (score >= 90) {
    console.log('Excellent');
} else if (score >= 75) {
    console.log('Good');
} else if (score >= 50) {
    console.log('Satisfactory');
} else {
    console.log('Needs Improvement');
}
