let people = [];
Array.toString(people);

function createPerson (firtsName, lastName, weight, height) {
    return {
        firtsName,
        lastName,
        weight,
        height
    };
};

function getData() {
    let firtsName = document.getElementById('firstNameTxt').value;
    let lastName = document.getElementById('lastNameTxt').value;
    let weight = Number(document.getElementById('weightTxt').value);
    let height = Number(document.getElementById('heightTxt').value);
    let peopleDiv = document.getElementById('response');
    
    let person = createPerson(firtsName, lastName, weight, height);

    peopleDiv.innerHTML += `
    <p>${firtsName} ${lastName} ${weight} ${height}</p>
    `
    
    people.push(person);

    console.log(people)
};

