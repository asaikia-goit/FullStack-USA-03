"use strict;"


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     },
//   "hey_there": "Whats up ?"
// };


// console.log(user['hey_there']);
// console.log(user.hey_there);
// const newObj = user.stats;
// console.log(newObj);


// console.log(newObj.views);
// console.log(user.stats.views);


/**
 * Adding Property
*/

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// book.pageCount = 1200;
// book.title = "Some random book";

// console.log(book);


// const userName = "Henry Cibola";
// const age = 25;

// const user = {
//   userName: userName,
//   age,
// };

// console.log(user.userName); // "Henry Cibola"
// console.log(user.age); // 25

// function someFn() {
//     // body
// }

// const propType = 'name';

// const user = {
//     age: 25,
//     someFn(name = "lorem") {
//         console.log(`User name is ${name}`);
//     }
// };  

// user[propType] = "lorem ipsum";


// user.someFn()

/**
 * 
 
addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },


 */

// John bought a book because John likes to read
// John bought a book because they likes to read


// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         console.log(this.books);
//     },
// };

// //? Rule - 1: When used in a method, `this` refers to the OBJECT where the method is


// bookShelf.getBooks()


// const myArr = [1, 2, 3, 4, 5];
// for (const elem of myArr) {
//     console.log(elem);
// }

// const myObj = {
//     name: 'orem',
//     age: 10,
//     getAge() {
//         console.log(this.age);
//     }
// }

// for (const property in myObj) {
//     console.log(property);
// }
// //OR
// for (const property of Object.keys(myObj)) {
//     console.log(property);
// }

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))


// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// for (val in dog) {
//     if (dog.hasOwnProperty(val)) {
//         console.log(val);
//     }
// }


// for (val of Object.keys(dog)) {
//     console.log(val);
// }


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};


const userSelectedKeyFromDropdown = 'title';

console.log(book[userSelectedKeyFromDropdown]);
