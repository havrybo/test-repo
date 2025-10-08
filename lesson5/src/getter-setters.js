const person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 31,
    hobbies: {
        hobby1: 'bicycle riding',
        hobby2: 'workout',
        hobby3: 'coding'
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            console.log('Please enter first and last name separated by a space');
        }
    },

    get mainHobby() {
        return this.hobbies.hobby1;
    },

    set mainHobby(hobby) {
        this.hobbies.hobby1 = hobby;
    },

    get allHobbies() {
        return `${this.hobbies.hobby1}, ${this.hobbies.hobby2}, ${this.hobbies.hobby3}`;
    },

    summary() {
        return `Name: ${this.fullName}, Age: ${this.age}, Hobbies: ${this.allHobbies}`;
    }
};

console.log(person.summary());

console.log('--- Updating data ---');

person.fullName = 'John Down';
person.mainHobby = 'hiking';

console.log(person.summary());
