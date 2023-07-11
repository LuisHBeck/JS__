function say(first){
    function rest(continuation) {
        return first + continuation;
    };
    return rest;
}

// let phrase = say('Olá, ');
// let fineshed = phrase('every thing is ok?')
// console.log(fineshed)

function multiplicationBy(multiplier){
    function multiplication(number){
        return multiplier*number;
    };
    return multiplication;
};

let multiplicationByFive = multiplicationBy(5);
let result = multiplicationByFive(15);
console.log(result);

