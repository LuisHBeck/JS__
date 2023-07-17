function createPerson(firtsName, lastName) {
    return {
        firtsName,
        lastName,
        say: function(subject) {
            return `${firtsName} is ${subject}`
        }
    };
}

const p1 = createPerson('Luís', 'Beck');
console.log(p1)