// avaliable in all the code scope
function sayHi() {
    console.log('Hi');
};

// assigned to a var (ex - parameter to another function)
const varFunction = function() {
    console.log('Var function');
    console.log('Teste');
};

function execute(fctn) {
    fctn();
};
// execute(varFunction)


// Arrow function
const arrow = () => {
    console.log('Arrow function');
};  
// arrow()



