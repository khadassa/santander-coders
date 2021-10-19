class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    bio() {
        const message = `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interests}.`
        console.log(message)
    }

    greeting() {
        const message = `Hi! I'm ${this.firstName} ${this.lastName}.`
        console.log(message)
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests)
        this.subject = subject
    }

    greeting() {
        const message = `Hello. My name is ${this.firstName} ${this.lastName}, and I teach ${this.subject}`
        console.log(message)
    }
}

class Studant extends Person {

    greeting() {
        const message = `Yo. I'm ${this.firstName}`
        console.log(message)
    }

}

let cristiano = new Studant('Cristiano', 'Silva', 24, 'male', ['code', 'games', 'music'])
console.log(cristiano);
console.log(cristiano.greeting());
console.log(cristiano.bio())

let maria = new Person('Maria', 'Souza', 34, 'fem', ['movies', 'cats', 'party'])
console.log(maria);
console.log(maria.greeting());
console.log(maria.bio());

let joao = new Teacher('João', 'Costa', 45, 'male', ['math', 'dogs', 'cience'], 'math')
console.log(joao);
console.log(joao.greeting());
console.log(joao.bio())