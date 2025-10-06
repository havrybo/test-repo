const user = {
    name: 'Bohdan',
    age: 31,
    hobbies: ['cycling', 'coding', 'workout', 'hiking' ],
    address: {
        city: 'Kyiv',
        street: 'Main Street'
    },
    sayHello: function () {
        console.log('Hello, my name is ' + this.name);
    }
};

user.sayHello();
console.log('Age;', user.age);
console.log('User city:', user.address.city );
console.log('User street:', user.address.street);
console.log('Hobby of the user:', user.hobbies[2]);

