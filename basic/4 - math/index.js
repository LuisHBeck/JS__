let input = prompt(`Input a number:`);
let number = parseFloat(input);

let response = document.getElementById('answer');

response.innerHTML = `
<h1>Your number is ${number}</h1>
<p>The square root is ${Math.round(Math.sqrt(number))}</p>
<p>${number} is full: ${Number.isInteger(number)}</p>
<p>${number} is NaN: ${Number.isNaN(number)}</p>
<p>Rounded down ${Math.floor(number)}</p>
<p>Rounded up ${Math.ceil(number)}</p>
<p>With two decimal places ${number.toFixed(2)}</p>
`