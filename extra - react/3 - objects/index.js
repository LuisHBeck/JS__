const person1 = {
    name: 'Luís Beck',
    age: 19,
    isMarried: false,
};

// object extraction
const { name, age, isMarried } = person1;

// objeto igual 'person1', mudando apenas uma variavel especifica
const person2 = {...person1, name:'Daniel Beck'};

// mesmo do de cima porem com array
const names = ['Luís', 'Daniel', 'Matheus'];
const names2 = [...names, 'John', 'Raphael']

console.log(names2)