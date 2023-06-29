function regards(name) {
    console.log(`Good morning, ${name}!`)
    return 5
}

let k = regards('Luís Beck');
// console.log(k)

//standard way to declare a function 
function sum(x=0, y=0) {
    return x+y;
}

//anonymous function
const square = function (n) {
    return n**0.5;
};

// console.log(square(25))

//arrow function (one line function)
const sqrt = (n) => n**0.5;

console.log(sqrt(25))
