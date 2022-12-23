'use strict';

// Pure functions
/**
 * 
 * A pure function is a fn that does not change the input values
 */

// function add(a, b){
//     const sum = a + b;
//     return sum;
// }
// console.log(add(2, 5));

// const sortArray = (arr) => {
//     const list = [...arr];
//     list.sort();
//     return list;
// }

// const sampleList = [6, 4, 9, 8];
// console.log(sortArray(sampleList));
// console.log(sampleList);

// MAP

// const cart = [{
//     itemName: 'Apple',
//     count: 2,
//     image: "src/asfnjsa",
// }, {
//     itemName: 'banana',
//     count: 12,
//     image: "src/asfnasdjsa"
// }];

// const cartUI = cart.map((item, idx, list) => {
//     return `<div class="cart-item">
//         <p>{item.itemName}</p>
//         <p>{item.count}</p>
//         <img src={item.image} />
//     </div>`
// })


// console.log(cartUI);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map( student => student.name );
// console.log(names); // ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["informatics", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// // console.log(students.map(student => student.courses))

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );


// // Optimized Solution
// // Object lookup is FAST!!! O(1) Time
// const visited = {};
// const outputArray = [];

// for (let idx = 0; idx < allCourses.length; idx++) {
//     const course = allCourses[idx];

//     // Check if course exists in the visited object
//     if (!visited[course]) {
//         visited[course] = true;
//         outputArray.push(course);
//     }
// }

// console.log(outputArray);

// TWO-SUM: Given an array = [ -2, 2, 14, 4, 8, 10 ] and a targetSum (eg, 12, 10) find idx of the two 
// numbers that can add up to targetSum.

// Worst => O(N^2) Time
// Good => O(N ln N) Time
// Best => O(N) Time

// function twoSum(numbersList, targetSum) {

//     /// Return 
// }


// FIND INDEX vs INDEX OF

// const colorPickerOptions = [
//     "asdsad",
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.indexOf('asdsad'));

// console.log(colorPickerOptions.findIndex((item)=> item === 'asdsad'));

// console.log(colorPickerOptions.findIndex(option => option.label === "blue")); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1


// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log(tags)



// const getTagStats = (acc, tag) => {

//   if (!acc[tag]) {
//     acc[tag] = 1;
//   } else {
//     acc[tag] += 1;
//   }


//   return acc;
// };

// // The initial accumulator value is an empty object {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// const listX = [1, 2, 19];
// const res = [];

// listX.forEach((value, idx) => {
//     res.push(value * idx)
// })

// console.log(res)

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["informatics", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => index === array.indexOf(course)
// );


// const getActiveUsers = (users) => users.filter(user => user.isActive === true)

// const getActiveUsersX = (users) => {

//     // Filter the users based on isActive prop
//     const filteredUsers = users.filter((user) => {
//        return user.isActive === true
//     })
    
//     return filteredUsers;
// };


// john is running fast because john is trying to catch the train.
// const john = {
//   username: "john",
//   showName() {
//     console.log(this.username);
//   },
// };

// john.showName();


// console.log(this);

// function foo() {
//   console.log(this);
// }

// foo();


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Arrows remember the context during declaration,
//       // from the parent scope
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();


/**
 * REDUCE with array.push()
 */

// {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   }
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalFriendCount = users => {
  
//   const allFriends = [];

//   for (let idx = 0; idx < users.length; idx++) {
//     const currentUser = users[idx];
//     const currentUserFriends = currentUser.friends;
//     allFriends.push( ...currentUserFriends );
//   }

//   return allFriends.length;
// };


// const getTotalFriendCountWithReduce = users => {
  
//   return users.reduce((accumulatedFriends, currentUser) => {
    
//     accumulatedFriends.push(...currentUser.friends);
//     return accumulatedFriends;
//   }, []).length;


// };


// const totalFriendsCount = getTotalFriendCountWithReduce(users);
// console.log(totalFriendsCount);

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
    
//     for (let idx = 0; idx < this.stones.length; idx++) {
//       const currentStone = this.stones[idx];
//       if (currentStone.name === stoneName) {
//         return currentStone.price;
//       }
//     }
//   },

// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook);




const calculator = {
  numA:0,
  numB:0,
  
  read(a, b) {
    this.numA = a;
    this.numB = b;
  },

  add() {
    return this.numA + this.numB;
  }

}


calculator.read(10, -5);
console.log(calculator.add());