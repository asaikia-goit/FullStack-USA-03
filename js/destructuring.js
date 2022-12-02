"use strict";

// console.log(1, -10, 12);
// console.log(Math.max(1, -10, 12));

// const temps = [14, -4, 25, 8, 11];

// // The console will have an array,
// console.log(temps);
// // ❌ This will not work because you are passing the entire array
// console.log(Math.max(temps)); // NaN

// // The console will have a set of separate numbers
// console.log(...temps);
// // ✅ Spread the collection of elements as separate arguments
// console.log(Math.max(...temps)); // 25


// const myArray = [ 12, 21, "Apple" ];
// const newArray = [ ...myArray ];

// newArray[2] = 100;

// console.log(myArray, newArray);


// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second, newProp: "lorem" };
// console.log(third);


// const dummyObj = {
//     first: 10,
//     second: 20,
//     first: 100,
// }

// /**
// A. {
//     first: 10,
//     second: 20,
// }

// B. {
//     first: 100,
//     second: 20,
// }


//  */

// console.log(dummyObj);


// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second, propB: 2500 };
// console.log(
//     first,
//     second,
//     third
// );


// How to declare function parameters so
// that any number of arguments can be passed?
// const multiply = function (first, second, ...restOfArgs) {
//     console.log(first, second);
//     console.log(arguments);
//     console.log(restOfArgs);
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Destructuring
// const { title, author, isPublic } = book;

// console.log(title, author, isPublic);


// const book = {
//   title: "The Last Kingdom",
//     author: "Bernard Cornwell",
// //   coverImage: "tesjva,fbla.ds"
// };

// // Add a cover picture if it is not in the book object
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//     const { title, author, rating } = book;
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//     name,
//     tag,
//     stats: {
//         followers,
//         views: userViews,
//         likes = 0,
//     }
// } = user;


// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke

// console.log(followers);
// console.log(userViews);
// console.log(likes);


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// const {
//     name
// } = user;

// console.log(name);

// const arr = [10, 20, 101]
// const [ , second, ] = arr;
// console.log(second);