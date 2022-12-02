"use strict";

/**************************  Module 1. Lesson 1  ********************** */

/*
## Example 1 - Mathematical operators 

Display the total number of apples and grapes on the screen. The difference between apples and grapes.
*/

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes ;
// console.log(total)
// const absDiff = Math.abs(apples - grapes);
// console.log(absDiff)

// ## Example 2 - Combined operators

// Replace the override expression with the combined operator `+=`.

// let students = 100;
// students += 50;
// console.log(students);

// ## Example 3 - Operators Priority
// Disassemble operators priority in the variable value assignment  instruction
// `result`.
// P E M D A S
// 108 + 223 - 2 * 5 = 108 + 223 - 10 = 
// const result = 108 + 223 - (2 * 5);
// console.log(result);

// ## Example 4 - Math class

// Write a script that prints to the console rounded up/down, etc. values
// of variable `value`. Use the methods `Math.floor()`, `Math.ceil()` and
// `Math.round()`. Check what happens in the console for the values "27.3" and "27.9".

// const firstValue = 27.3;
// const secondValue = 27.9;

// console.log(Math.floor(firstValue), Math.ceil(firstValue), Math.round(firstValue));
// console.log(Math.floor(secondValue), Math.ceil(secondValue), Math.round(secondValue));

// ## Example 5 - Template lines

// Compose a phrase using the template strings `A has B bots in stock`, where A, B -
// variables inserted into a line.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - String methods and chaining

// Write a script that calculates a person's body mass index. For this
// you need to divide the weight in kilograms by the square of the person's height in meters.

// Weight and height are stored in the `weight` and `height` variables, but not as numbers, but in
// as strings (specially for the task). Non-integer numbers can be given as
// `24.7` or `24,7`,that is, as a separator of the fractional part can be
// comma.

// The body mass index should be rounded to one decimal place;

// let weight = '88,3'.replace(',', '.');
// weight = Number.parseFloat(weight);
// let height = '1.75';
// height = Number.parseFloat(height);

// const bmi = weight / Math.pow(height, 2);
// console.log(bmi); // 28.8

// ## Example 7 - Comparison operators and type casting

// What will be the result of the expressions?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log("UNICODE: ", "P".charCodeAt(0), "p".charCodeAt(0))

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// ## Example 8 - Logical operators

// What will be the result of the expressions?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ## Example 9 - Default value and null merge operator 

//  Refactor the code so that the value is assigned to the `value` variable
// variable `incomingValue` if it is not equal to `undefined` or `null`. Otherwise,
// `defaultValue` must be assigned. Check work
// script for the following values of the `incomingValue` variable: null, undefined, 0,
// false. Use operator `??` (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// ## Example 10 - The % Operator and String Methods

// Write a script that will convert the value of `totalMinutes` (number of minutes) to
// string in hour and minute format `HH:MM`.

// - 70 will show 01:10
// - 450 will show 07:30
// - 1441 will show 24:01

// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);



/**************************  Module 3. Lesson 1. Objects  ********************** */

// ## Example 1 - Object Basics

// Write a script that, for the `user` object, successively:

// - adds a `mood` field with value `'happy'`
// - replaces the value `hobby` to `'skydiving'`
// - replaces `premium` to `false`
// - prints the contents of the `user` object in `key:value` format using
//   `Object.keys()` and `for...of`


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     hi: [1, 2, 3],
// }
// const prop = 'mood'
// user[ prop ] = "happy";
// user.hobby = "skydiving"
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key} : ${user[key]}`)
// }

// ## Example 2 -  Object.values() method

// We have an object that stores our team salaries. Write code for
// summing all salaries and store the result in the sum variable. Should
// get 390. If the `salaries` object is empty, then the result should be 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const value of Object.values(salaries)) {
//     sum += value;
// }

// console.log(sum);

// ## Example 3 - Array of objects

// Write a function `calcTotalPrice(stones, stoneName)` that takes an array
// of objects and a string with the name of the stone. The function calculates and returns the total cost
// of stones with the same name, price and quantity from the object

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 3 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//     }

//     return "stone not found!"
// }


// console.log(calcTotalPrice(stones, "Diamond"));

// ## Example 4 - Complex tasks

// Write a script for managing a personal account of an Internet bank. There is an `account` object
// in which it is necessary to implement methods for working with balance and
// transaction history.

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Each transaction is an object with properties: id, type and amount
//  */

// const account = {
//     // Current account balance
//     balance: 0,
//     id: 0,

//     // Transaction History
//     transactions: [],

//     /*
//     * Method creates and returns a transaction object.
//     * Accepts amount and type of transaction.
//     */
//     createTransaction(amount, type) {
//         const currentTransaction = {
//             id: this.id,
//             amount,
//             type,
//         }
//         this.id += 1;
//         return currentTransaction;
//     },

//     /*
//     * The method responsible for adding the amount to the balance..
//     * Accepts the amount of the transaction.
//     * Calls createTransaction to create a transaction object
//     * then adds it to the transaction history
//     */
//     deposit(amount) {
//         // Checks for valid amount
//         amount = Number.parseFloat(amount);
//         if (Number.isNaN(amount) || amount <= 0) {
//             return;
//         }

//         // Update balance
//         this.balance += amount;
        
//         // Save transaction history
//         const transactionObj = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.transactions.push(transactionObj);
//         return this.getBalance();
//     },

//     /*
//     *The method responsible for withdrawing the amount from the balance.
//     * Accepts transaction amount
//     * Calls createTransaction to create a transaction object
//     * then adds it to the transaction history.
//     *
//     * If amount is greater than the current balance, display a message
//     * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//     */
//     withdraw(amount) {

//         // Save transaction history
//         const transactionObj = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(transactionObj);

//         if (amount > this.balance) {
//             console.log("Try a smaller amount!");
//             return;
//         }

//         console.log("Withdrawing money now...!");
//         this.balance -= amount;
//     },

//     /*
//     * The method returns the current balance
//     */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//     * The method searches and returns the transaction object by id
//     */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//           if (transaction.id === id) {
//               return transaction;
//             }
//         }
//     },

//     /*
//     * The method returns the amount of funds
//     *a specific type of transaction from the entire history of transactions
//     */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += transaction.amount;
//             }
//         }
//         return total;
//     },
// };

// console.log(account);
// console.log(account.getBalance())
// account.deposit(100);
// account.deposit(250);
// account.withdraw(150);
// account.withdraw(250);
// account.deposit(800);
// account.withdraw(50);
// account.withdraw(150);
// account.withdraw(300);
// console.log(account.getTransactionDetails(1));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// // this

// // RULE: when called from a method this refers to the object it is inside

// const user = {
//     name: "lorem",
//     age: 80,
//     occupation: "teacher",

//     getName() {
//         console.log(this);
//     }
// }

// console.log(user.getName);

/**************************  Module 1. Lesson 2. Branching. Cycles  ********************** */

// ## Example 1 - User Input and Branching

// Using the if..else and prompt constructs, write code that will ask:
// `"What is the official name of JavaScript?"`. If the user enters
// `ECMAScript`, then show an alert with the string `"Correct!"`, otherwise -
// `"Do not know? ECMAScript!"`

// const answer = prompt("What is the official name of JavaScript?");
// const answerInLowerCase = answer.toLocaleLowerCase();
// const answerInLowerCaseWithoutSpaces = answerInLowerCase.replaceAll(" ", "");

// const potentialAnswers = [ "ecmascript", "ecma-script", "es6" ];

// if (potentialAnswers.includes(answerInLowerCaseWithoutSpaces)) {
//     alert("Correct!");
// } else {
//     alert("Do not know? ECMAScript!");
// }

// ## Example 2 - Time display (if...else)

// Write a script to display hours and minutes in the browser console as a string
// format `"14 hours 26 minutes."`. If the value of the `minutes` variable is `0`, then
// output the string `"14 o'clock"`, without minutes.

// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes > 0) {
//   timeString = `${hours} hours. ${minutes} minutes.`;
// } else {
//   timeString = `${hours} o'clock.`;
// }
// console.log(timeString);

// ## Example 3 - Branching10

// Write a script that prints the string `"This is a positive number"` to the console,
// if the user entered a number greater than zero in the prompt. If zero was entered, output
// to the console the string `"This is zero"`. If a negative number is passed, in the console
// should be the string `"This is a negative number"`.

// let userInput = prompt('Enter the number'); // ? prompt takes in the values as a STRING !!!!
// // console.log(userInput, typeof userInput);

// userInput = Number.parseFloat(userInput);

// if (typeof userInput !== "number") {
//     console.error("Please enter a valid number !");
// }

// let msg = "This is zero";

// if (userInput > 0) {
//     msg = "This is a positive number";
// } else if (userInput < 0) {
//     msg = "This is a negative number";
// }
// console.log(msg);

// ## Example 4 - Nested branches

// Write a script that compares the numbers in variables `a` and `b`. If both
// values greater than `100`, then print the maximum of them to the console. Otherwise,
// the console should show the sum of the value `b` and the number 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }

// const value = (a > 100 && b > 100) ? Math.max(a, b) : (b + 512);
// console.log(value);

// ## Example 5 - Link Formatting (endsWith)

// Write a script that checks if the value of the `link` variable ends
// symbol `/`. if not, add this character to the end of the `link` value. Use
// `if...else` construction.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/")) {
//     link = link + '/';
// }

// console.log(link);

// ## Example 6 - Link formatting (includes and logical "AND")

// Write a script that checks if the value of the `link` variable ends by
// symbol `/`. If not, append this character to the end of the `link` value, but only
// if `link` contains the substring `"my-site"`. Use construction
// `if...else`.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/") && link.includes("my-site")) {
//     link = link + '/';
// }

// link = ( !link.endsWith("/") && link.includes("my-site") ) ? link + '/' : link;

// console.log(link);

// ## Example 7 - Link formatting (ternary operator)

// Make code  refactoring of the  task number 4 code using ternary operator.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// ## Example 8 - if...else and logical operators 

// Write a script that will output a string to the browser console depending on
// `hours` variable values.

// If the value of the variable `hours`:

// - less than `17`, output the string `"Pending"`
// - greater than or equal to `17` and less than or equal to 24, output the string `"Expires"`
// - greater than `24` , output the string `"Overdue"`

// const hours = 25;
// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Overdue");
// }

// ## Example 9 - Project submission deadline (if...else)

// Write a script to display the project deadline time. Use
// `if...else` construction.

// - If there are 0 days before the deadline - output the string `"Today"`
// - If it's 1 day before the deadline - output the string `"Tomorrow"`
// - If it's 2 days before the deadline - output the string `"The day after tomorrow"`
// - If it's 3+ days before the deadline - print the string `"Date in the future"`

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     console.log("Output");
// } else if (daysUntilDeadline === 1) {
//     console.log("Tomorrow");
// }

// ## Example 10 - Project submission deadline (switch)

// Make the code refactor of the task number 5 code using `switch`.

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Today');
//         break;
//     case 1:
//         console.log('Tomorrow');
//         break;
//     case 2:
//         console.log('The day after tomorrow');
//         break;
//     default:
//         console.log('Date in the future');
//         break;
// }

// ## Example 11 - The for loop 

// Write a for loop that prints numbers in ascending order to the browser console from `min` 
// to `max`, but only if the number is a multiple of `5`.

// const max = 100;
// const min = 20;

// // 20 25 ....100

// for (let val = min; val <= max; val++) {
//     if (val % 5 === 0 ) {
//         console.log(val);
//     }    
// }

// ## Example 12 - User Input and Branching 

// Write a script that will ask for login using `prompt` and log
// result in browser console.

// - If the visitor enters `"Admin"`, then `prompt` prompts for a password
// - If nothing is entered or the Esc key is pressed - print the line `"Canceled"`
// - Otherwise print the string `"I don't know you"`

// Check password like this:

// - If the password is `"I'm an admin"`, then output the string `"Hello!"`
// - Else output the string `"Wrong password"`


// # Module 2 - Lesson 4 - Functions

// ## Example 1 - Body mass index
// Write a function `calcBMI(weight, height)` that calculates and returns the body mass
// index of a person. To do this, divide the weight in kilograms by
// square of a person's height in meters.

// The weight and height will be specially passed as strings. Non-integer numbers can be
// specified as `24.7` or `24.7`, i.e. a comma can be used
// as a decimal separator.

// Body mass index must be rounded to one decimal place;

// function calcBMI(w, h) {
//     let weight = w.replace(',', '.');
//     weight = Number.parseFloat(weight);
//     let height = Number.parseFloat(h);

//     const bmi = weight / Math.pow(height, 2);
//     return bmi.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// ## Example 2 - Smaller of numbers

// Write a function `min(a,b)` that returns the smaller of the numbers `a` and `b`.

// const min = function (a, b) {
//     return  a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// ## Example 3 - Area of a rectangle

// Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
// with sides, the values of which will be passed to the `dimensions` parameter as a string.
// Values are guaranteed to be separated by a space.


// function getRectArea(dimensions) {
//     const dim = dimensions.split(" ");
//     return dim[0] * dim[1];
// }

// console.log(getRectArea('8 11'));


// ## Example 4 - Element logging

// Write a function `logItems(items)` that takes an array and uses a `for` loop
// that for each element of the array will print a message to the console
// in the format `<item number> - <item value>`. The numbering
// of elements should start with `1`.

// For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
// will print `1 - Mango` and for index 2 will print `3 - Ajax`.

// function logItems(items) {
    // for (let idx = 0; idx < items.length; idx++){
    //     const position = idx + 1;
    //     const value = items[idx];
    //     console.log(`${position} - ${value}`)
    // }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## Example 5 - Contact logging

// Write a function `printContactsInfo(names, phones)` that prints  to the console the name
// and the user's phone number. The `names` and `phones` parameters will be passed
// strings of names and phone numbers separated by commas. Sequence number of names and
// phone numbers in the rows indicate a match. Number of names and phones
// guaranteed to be the same.

// function printContactsInfo(names, phones) {
//     const userNames = names.split(",")
//     const userPhones = phones.split(",");

//     for (let idx = 0; idx < userNames.length; idx++) {
//         const user = userNames[idx]
//         const phoneNum = userPhones[idx]
//         console.log(`'${user}' has phone : ${phoneNum}`)
//     }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// ## Example 6 - Finding the largest element

// Write a function `findLargestNumber(numbers)` that looks for the largest number in
// array.

// function findLargestNumber(numbers) {

//     let maxNum = Number.NEGATIVE_INFINITY;
//     for (const num of numbers) {
//         if (num > maxNum) {
//             maxNum = num;
//         }
//     }
//     return maxNum;
// }

// console.log(findLargestNumber([49, 4, 117, 83, 312])); // 83

// ## Example 7 - Average value

// Write a `calAverage()` function that takes an arbitrary number of arguments
// and returns their average. All arguments will be only numbers.

// function calAverage() {
//     const len = arguments.length;
//     let sum = 0;

//     for (let index = 0; index < arguments.length; index++) {
//         const element = arguments[index];
//         sum += element;
//     }

//     return(sum/len);
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ## Example 8 - Time Formatting

// Write a function `formatTime(minutes)` that will translate the value of `minutes`
// (number of minutes) to a string in hour and minute format `HH:MM`.

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// ## Example 9 -Collection of courses (includes, indexOf, push, etc.)

// Write functions to work with the `courses` collection of training courses:

// - `addCourse(name)` - adds a course to the end of the collection
// - `removeCourse(name)` - removes a course from the collection
// - `updateCourse(oldName, newName)` - changes the name to a new one

// let courses = ['HTML', 'CSS', 'JavaScript', "Express",  'React', 'React', 'Vue'];

// function addCourse(courseName) {
//     courses.push(courseName);
// }

// addCourse('Express');
// addCourse('CSS'); // ' You already have this course'
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

// function removeCourse(name) {

//     const updatedCourses = [];

//     for (let idx = 0; idx < courses.length; idx++) {
//         const courseName = courses[idx];
//         if (name !== courseName) {
//             updatedCourses.push(courseName);
//         }
//     }

//     courses = updatedCourses;
// }

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); 
// console.log(courses); 
// removeCourse('CSS'); 
// console.log(courses); 


// function updateCourse(name, updated) {

//     for (let idx = 0; idx < courses.length; idx++) {
//         const courseName = courses[idx];
//         if (name === courseName) {
//             courses[idx] = updated;
//         }
//     }
// }

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']





// # Module 3 Lesson 6. Destructuring and rest/spread

// ## Example 1 - Destructuring

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function calcBMI(props) {
//     const {
//         weight,
//         height
//     } = props;

//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // It was
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Is expected 
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// ## Example 2 - Destructuring

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function printContactsInfo({
//         names,
//         phones,
//     }) {

//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // It was
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Is expected
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ## Example 3 - Deep destructuring

// Rewrite the property so that it uses one object's parameter instead of a set
// of independent arguments.

// function getBotReport({
//     companyName,
//     bots: {
//         repair: repairBots,
//         defence: defenceBots
// }}) {

//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // It was
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Is expected 
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 4 - Destructuring

// Rewrite the function so that it accepts a parameters object with properties
// `companyName` and `stock` and display a report about the number of goods in the warehouse
// of any companies.


// Solution
// function getStockReport({ companyName, stock}) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// ## Example 5 - operation Spread 

// Extend the `createContact(partialContact)` function so that it returns a new
// contact object with `id` and `createdAt` properties added, as well as `list` with
// value "default" if there is no such property in `partialContact`.

// // Solution
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );



// ## Example 6 - Operation rest

// Write a `transformUsername(user)` function to return a new object
// with `fullName` property instead of `firstName` and `lastName`.

// Solution
// function transformUsername({
//         firstName,
//         lastName,
//         ...restOfProps
//     }) {

//     const {
//         firstName,
//         lastName,
//         ...restOfProps
//     } = propsObj;

//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...restOfProps,
//     };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

// Callback

// function takeCall(name) {
//   console.log(`Connecting you to ${name}, please wait...`);
//   // Call handling logic
// }

// function activateAnsweringMachine(name) {
//   console.log(
//     `The subscriber ${name} is not available, please leave a message.`
//   );
//   // Answering machine activation logic
// }

// function leaveHoloMessage(name) {
//   console.log(`The subscriber ${name} is not available, recording a hologram.`);
//   // Hologram record logic
// }

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Simulating the subscriber’s availability with a random number
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }


// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);


// const numbers = [5, 10, 15, 20, 25];

// // Classic for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Index ${i}, value ${numbers[i]}`);
// // }




// // Iterating forEach
// numbers.forEach( function (__, index) {
//   console.log(`Index ${index}, value ${__}`);
// });

// numbers.forEach((value, idx) => console.log(`Index ${idx}, value ${value}`));







// function regularFunction() {
//     console.log("lorem ipsum");
// }

// const expression = function () {
//     console.log("lorem ipsum");
// }

// const arrow = () => {
//     console.log("lorem ipsum");
// }



// regularFunction()
// expression()
// arrow()


// const add = (a, b, c) => {
//   return a + b + c;
// };

// const addedNum = add(2, 4, 10);
// console.log(addedNum);


const sub = (a, b) => a - b;
const x = sub(4, 1);
console.log(x);


// const test =  (...props) => {
//     console.log(props);
// }

// test(1, 20, 1982621);

const numbers = [5, 10, 15, 20, 25];

// Function declaration
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Anonymous arrow function
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});