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
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
    // Current account balance
    balance: 0,
    id: 0,

    // Transaction History
    transactions: [],

    /*
    * Method creates and returns a transaction object.
    * Accepts amount and type of transaction.
    */
    createTransaction(amount, type) {
        const currentTransaction = {
            id: this.id,
            amount,
            type,
        }
        this.id += 1;
        return currentTransaction;
    },

    /*
    * The method responsible for adding the amount to the balance..
    * Accepts the amount of the transaction.
    * Calls createTransaction to create a transaction object
    * then adds it to the transaction history
    */
    deposit(amount) {
        // Checks for valid amount
        amount = Number.parseFloat(amount);
        if (Number.isNaN(amount) || amount <= 0) {
            return;
        }

        // Update balance
        this.balance += amount;
        
        // Save transaction history
        const transactionObj = this.createTransaction(amount, Transaction.DEPOSIT)
        this.transactions.push(transactionObj);
        return this.getBalance();
    },

    /*
    *The method responsible for withdrawing the amount from the balance.
    * Accepts transaction amount
    * Calls createTransaction to create a transaction object
    * then adds it to the transaction history.
    *
    * If amount is greater than the current balance, display a message
    * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
    */
    withdraw(amount) {

        // Save transaction history
        const transactionObj = this.createTransaction(amount, Transaction.WITHDRAW)
        this.transactions.push(transactionObj);

        if (amount > this.balance) {
            console.log("Try a smaller amount!");
            return;
        }

        console.log("Withdrawing money now...!");
        this.balance -= amount;
    },

    /*
    * The method returns the current balance
    */
    getBalance() {
        return this.balance;
    },

    /*
    * The method searches and returns the transaction object by id
    */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
          if (transaction.id === id) {
              return transaction;
            }
        }
    },

    /*
    * The method returns the amount of funds
    *a specific type of transaction from the entire history of transactions
    */
    getTransactionTotal(type) {
        let total = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }
        return total;
    },
};

console.log(account);
console.log(account.getBalance())
account.deposit(100);
account.deposit(250);
account.withdraw(150);
account.withdraw(250);
account.deposit(800);
account.withdraw(50);
account.withdraw(150);
account.withdraw(300);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));