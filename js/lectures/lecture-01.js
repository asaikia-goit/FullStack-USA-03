"use strict";
// DO NOT REMOVE ABOVE !


// const and let

// let ssn;
// console.log(ssn);

// ssn = "xxxxasdsadsadsadasd";
// console.log(ssn);


// Primitive types

// 1. Numbers
// const wholeNum = 10;
// const floatNumber = 3.1416;

// console.log(wholeNum)

// // 2. Strings
// const age = '10';

// console.log(age);

// if (age === 10) {
//     console.log("John is 10 years old today !");
// }

// Boolean => true OR false
// const isUserSignedIn = false;
// console.log(isUserSignedIn);

// Truthy: all except 0
// Falsy: +-0 is falsy ; undefined ; null

// if (null) {
//     console.log("I am inside IF !")
// }


// Properties: .length
// methods: .toUpperCase()

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"


// Ask the client to confirm hotel reservation
// and save the confirm result to a variable
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Ask for the name of the hotel where the client would like to stay
// and save the prompt result to a variable.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const x = 10;
// const y = 5;

// // Addition
// console.log(x + y); // 15

// // Subtraction
// console.log(x - y); // 5

// // Multiplication
// console.log(x * y); // 50

// // Division
// console.log(x / y); // 2

// // Remainder of a division
// console.log(11 % y); // 1

// // Addition with replacement (also available for all other operators)
// let value = 5;

// // Similar to value = value + 10;
// value += 10;
// console.log(value); // 15

// value -= 10; // value = value - 10
// console.log(value); // 5

// value *= 10; // value = value * 10
// console.log(value); // 50

// value /= 10; // value = value / 10
// console.log(value); // 5

// Strict equality(===) vs equality(==)

// console.log(10 == '10')

// console.log(10 === '10')


// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false


// const valueA = "5";
// console.log(valueA); // '5'
// console.log(typeof valueA); // "string"

// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// const x = Number(valueB);
// console.log(x); // NaN
// console.log(typeof x); // "number"

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


// // Number.isNaN(     ) : true if Not a Number, else false
// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true


// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41


// Math.floor(num) returns the smallest integer
// less than or equal to the specified one
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) returns the largest integer
// // greater than or equal to the specified number
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) returns the value of a number
// // rounded to the nearest integer
// console.log(Math.round(1.4)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) returns the largest number from a set
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) returns the smallest number from a set
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - exponentiation
// console.log(Math.pow(26, 4)); // 16

// // Math.random() returns a pseudo-random number in the range (0, 1)
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random() * (10 - 1) + 1); // pseudo-random number from 1 to 10
// console.log(Number.parseInt(Math.random() * (10 - 1) + 1)); // pseudo-random Integer from 1 to 10

/**
 * STRINGS
 */

// Using variables, you need to make a string with substituted values
// const guestName = "Mango";
// const roomNumber = 207;
// const greeting =
//   `Welcome ${guestName}, your room number is ${roomNumber} !`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"


// const message = "Welcome to Bahamas!";
// // console.log(message.indexOf("to")); // 8
// // console.log(message.indexOf("hello")); // -1
// // console.log(message.indexOf("too")); // -1

// console.log(message.indexOf("Welcome"), message.includes("Welcome"))

// if (message.indexOf("Welcome")) {
//     console.log("Yay !")
// }

// if (message.includes("Welcome")) {
//     console.log("Yay !")
// }


// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true


// const jsFileName1 = "script.jsx";
// console.log(jsFileName1.endsWith(".js")); // false

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.replace(".js", ".min.js")); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const selectedText = 123213120.8729316219;

// console.log(!!selectedText);

// FALSY: false, 0, '' or "", undefined, null, nan

// let cost = 0;
// const subscription = "PREMIUM-500"; // SELECTED FROM DROPDOWN

// if (subscription === "PRO") {
//   cost = 100;
// } else if (subscription === 'PREMIUM') {
//     cost = 150
// } else {
//     cost = 10
// }

// console.log(cost);


// const age = 99;
// let msg = "";

// if (age < 16) {
//     msg = "You can't drive!";
// } else if (age < 21) {
//     msg = "You need someone else with you to drive !";
// } else if (21 < age && age < 60) {
//     msg = "You can drive alone !";
// } else {
//     msg = "Sorry! You are too old !";
// }

// console.log(msg);



// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type);

/**
 * TERNARY OPERATOR:
 * Only use when we have a single if else
 */

// let type;
// const age = 20;

// // <condition> ? <if_true> : <if__false>
// type = (age >= 18) ? "adult" : "child";

// console.log(type);

// ! DO NOT USE THIS !!!
// const age1 = 99;
// let msg1 = "";

// msg1 = (age < 16) ? "You can't drive!" : ( age < 21 ? "You need someone else with you to drive !" : (21 < age && age < 60) ? "You can drive alone !": "Sorry! You are too old !");
// console.log(msg1);


/**
 * SWITCH STATEMENTS
 */

// Given a number, check if it is divisible by 2, 3, 5, 10
// const num = 20;





// let cost;
// const subscription = "free";

// if (subscription === "free") {
//     cost = 0;
// } else if (subscription === "pro") {
//     cost = 100;
// } else if (subscription === "premium") { 
//     cost = 500;
// } else {
//     cost = 0; 
// }


// switch (subscription) {
//     case "free":
//         cost = 0;
//         break;

//     case "pro":
//         cost = 100;
//         break;

//     case "premium":
//         cost = 500;
//         break;

//     default:
//         cost = NaN; 
// }

// console.log(cost); // 500


/**
 * SCOPE
 */

const global = "global";

// if (true) {
//   const blockA = "block A";

//   // You see global + local A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Variables blockB and blockC cannot be found in the available scopes.
//   // You will see a variable accessing error.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // You see global + external A + local B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Variable blockC cannot be found in the available scopes.
//     // You will see a variable accessing error.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // You see global + local C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Variables blockA and blockB cannot be found in the available scopes.
//   // You will see a variable accessing error.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // You see only the global one
// console.log(global); // global

// // Variables blockA, blockB and blockC cannot be found in the available scopes.
// // You will see a variable accessing error.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined


/**
 * LOOPS
 */

let start = 1;
const end = 5;

// while (start <= end) {
//     console.log(start);
//     start += 1;
// }

// for (let i = 1; i <= 10; i += 1){
//     console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i; // 0 + 1 + 2 + 3
// }

// console.log(sum);


// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Number 3 found, abort the loop");
//     break;
//   }
// }

// console.log("Log after loop");


// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Odd i: ", i); // 1, 3, 5, 7, 9
// }

// const num = 10;

// const numArray = [1, 2, 3, 4, false, "Apple"] // length = 6 -> idx goes from 0 to (length - 1)

// numArray[3] = 40;

// console.log(numArray.length);
// console.log(numArray[ numArray.length - 1 ])


let empIds = [1, 3, 4, 8, 9, 10, 12, 21]; // empIds.length = 8


// Constant time operation
empIds[0]

// // Traverse the array and print out each element
// // Linear time operation
// for (let idx = 0; idx < empIds.length; idx++) {
//     const currentEmpId = empIds[idx];
//     console.log(idx, currentEmpId);
// }



// When you scan your ID, check if the ID is in DB (empIds Array)
// empIds = [...Array(10000)].map(() => Math.floor(Math.random() * 9));

// const scannedId = 1;

// for (let idx = 0; idx < empIds.length; idx++) {
//     const currentEmpId = empIds[idx];
//     const isScannedIdInDB = scannedId === currentEmpId;

//     if (isScannedIdInDB) {
//         console.log("You can go in!");
//         break;
//     }
// }

// console.log("Done");


// USE FOR...OF
// empIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const scannedId = 5;

// for (const __ of empIds) {
//     const isScannedIdInDB = scannedId === __;

//     if (isScannedIdInDB) {
//         console.log("You can go in!");
//         break;
//     }
// }

// console.log("Done");

/**
 * Inroduction to Algorithms 
 * 
 * Time and Space complexity
 * 
 * O(1) || O(n) || O(n^2) || O(log n) 
 */



/*
* Pass by value VS pass by reference
*/

// let x = 10;
// let y = x;
// console.log(x, y);

// x = 20;

// console.log(x, y);


// const arr = [1, 2, 3, 4];
// const newArr = arr;
// console.log(arr, newArr);

// arr[3] = 10;

// console.log(arr, newArr);


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// if (clients.indexOf("Monkong") === -1) {
//     console.log("Doesn't exist !")
// }


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const concatArray = [...oldClients, ...newClients];
// console.log(concatArray, oldClients, newClients)