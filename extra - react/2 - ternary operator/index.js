let age = 19;
let name = age >= 15 ? 'Luís' : 'Jack'


console.log(name)

const Component = () => {
    const age = 19;
    
    return age >= 15 ? <div>Pedro</div> : <div>Jack</div>
}