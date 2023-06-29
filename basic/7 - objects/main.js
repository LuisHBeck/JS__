// const people = {
//     firtsName: 'Luís',
//     lastName: 'Beck',
//     age: 19
// };

function createPerson (firtsName, lastName, age) {
    return {
        firtsName,
        lastName,
        age
    };
}


const person1 = {
    firtsName: 'Luís',
    lastName: 'Beck',
    age: 19,

    say() {
        console.log(`${this.firtsName} ${this.lastName} is saying hi!!`)
    }
};

person1.say();