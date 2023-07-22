let names = ['Luís Beck', 'Pedro', 'Daniel', 'Pedro'];

// itera por uma lista e executa uma função para cada um dos elementos
names.map((name) => {
    console.log(`${name}1`)
});

// itera e filtra uma lista
names.filter(() => {
    return name !== 'Pedro'
});

console.log(x)

// react exemple
names.map((name) => {
    return <h1>{name}</h1>
});