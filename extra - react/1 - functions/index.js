// regular function expression
export default function DoSomething() {

}

// arrow function expression
export const DoSomething = () => {

}

// anonymous function expression
<button>
    onClick={
        // não passa o nome da função
        () => {
            console.log('anonymous function')
        }
    }
</button>