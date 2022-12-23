'use strict;'


class Account {

    static Hello = {
        'hi': true,
    }

    #firstName;
    #lastName;
    email = 'lorem@gmail.com';
    
    constructor(fname, lname) {
        this.#firstName = fname;
        this.#lastName = lname;
    }

    updateName(fname, lname) {
        this.#updateFirstName(fname);
        this.#updateLastName(lname);
    }

    #updateFirstName(fname) {
        this.#firstName = fname;
    }

    #updateLastName(lname) {
        this.#lastName = lname;
    }

    readName() {
        return `${this.#firstName} ${this.#lastName}`
    }
    
}

// const poly = new Account('Poly', 'Ipsum');

// console.log(poly.Hello);

// console.log(poly.readName());

// poly.updateName('polly', 'ipsum');

// console.log(poly.readName());




class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

let mango;
if (!User.isEmailTaken("mango@mail.com")) {
    mango = new User({ email: "mango@mail.com" });
} else {
    console.log("Email already taken!")
}

console.log(mango);

if (!User.isEmailTaken("mango@mail.com")) {
    mango = new User({ email: "mango@mail.com" });
} else {
    console.log("Email already taken!")
}


const animal = {
    legs: 4
}

const bird = Object.create(animal);
bird.legs = 2;

const parrot = Object.create(bird);

console.log(parrot.legs);