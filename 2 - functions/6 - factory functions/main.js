function createPerson(firtsName, lastName, height, weight) {
    return {
        firtsName,
        lastName,

        get completeName() {
            return `${this.firtsName} ${this.lastName}`;
        },

        set completeName(value) {
            value = value.split(" ");
            this.firtsName = value.shift();
            this.lastName = value.join(" ")
        },

        say(subject) {
            return `${firtsName} is ${subject}`;
        },

        get imc() {
            return (weight/(height**2)).toFixed(2);
        }
    };
}

const p1 = createPerson('Luís', 'Beck', 1.8, 63);
(p1.completeName = 'Raphael Kakakak Prtaes')
console.log(p1.completeName)