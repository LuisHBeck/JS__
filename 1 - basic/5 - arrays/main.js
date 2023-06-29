const students = ['Beck', 'Fahl', 'Queiroz', 'Torres'];

Array.toString(students); // trasnform to strings

// console.log(students);

students[students.length] = 'Felipe'; // add do the end, last position
students[students.length] = 'Pedrinho';

students.push('Otávio'); // add to the end

students.unshift('Luca'); // add to the beginning 

students.pop(); // delete the last position

students.shift(); // remove the first position

delete students[5]; // remove the value but keeps the position with undefined value

console.log(students);

console.log(students.slice(0,-2)) // defined slice of array












// for (let student in students) {
//     console.log(students[student])
// }