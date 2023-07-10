// functions arguments (accessed by "arguments" -> array)
// constains all the arguments passed in the call of the function
function sum(a,b,c) {
    let sum=0;
    for(let parameter of arguments){
        sum+=parameter;
    };
    console.log(sum,a,b,c);
};
// sum(25,5,42,59,75)

// default parameter value
function division(a,b=2) {
    return a/b;
};
// console.log(division(25,5))


// destructuring parameter
function fcnt([value1,value2,value3]) {
    console.log(value1,value2,value3);
};
function fcnt2({name, age, height}) {
    console.log(name, age, height);
};

let num=[10,20,30];
// fcnt(num);

let person = {
    name: 'Luís',
    age: 19,
    height: 1.80
};
// fcnt2(person);


// rest operator (recive all the rest of parameters)
function count(operator, accumulator, ...numbers){
    for (let number of numbers){
        accumulator += number
    };
    console.log(numbers);
    console.log(accumulator);
}

count('+', 0, 15,25,36,48)