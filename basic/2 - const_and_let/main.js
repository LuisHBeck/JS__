let name = 'Luís Beck'
const age = 19; 
const weight = 65; 
const height = 1.81;

const date = new Date;
const currentYear = date.getFullYear()

let imc = weight / Math.pow(height, 2);
let birthYear = currentYear - age;

console.log(`${name}, born in ${birthYear}, has ${age} year old, 
he weighs ${weight}Kg, ${height} tall, and his IMC = ${imc.toFixed(2)}`)


// parseInt / parseFloat
// let teste = '5';
// console.log(typeof(teste))
// console.log(typeof(parseFloat(teste)))
