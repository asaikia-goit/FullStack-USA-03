/**
 * Function declaration
 */

// const arg1 = 1;
// const arg2 = 2;
// console.log('Hi Mom!')
// const myArray = [];
// myArray.push(arg1);
// myArray.push(arg2);
// console.log(myArray);

// function nameOfFunction(arg1, arg2, arg3) {
//     console.log(arg3)
//     const myArray = []
//     myArray.push(arg1);
//     myArray.push(arg2);
//     return myArray;
// }

// nameOfFunction(1, 2, "Hi");
// nameOfFunction(11, 29187, "Hello");

// const x = nameOfFunction(1, 2, "Lorem");
// console.log(x);

// const y = nameOfFunction(11, 29187, ":Ipsum");
// console.log(y);

// function multiply(x, y, z) {
//   console.log("The code before return is executed as usual");

//   // Returning the result of the multiplication expression
//   return x * y * z;

//   console.log(
//     "This log will never be executed, as it is positioned after return"
//   );
// }

// // The function result can be saved to a variable
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550


// function multiply(x, y, z) {
//     console.log(`Multiplication result is ${x * y * z}`);
    


// }

// console.log("Log before calling the multiply function");
// multiply(2, 3, 5); // Multiplication result is 30
// console.log("Log after calling the multiply function");

// // Sequence of logs in the console:
// // "Log before calling the multiply function"
// // "Multiplication result is 30"
// // "Log after calling the multiply function"


/**
 * Default Param
*/

// function canDrive(age = 0) {
//     if (age < 10) {
//         return "you are a kid. come back later!"
//     } else if (age > 10 && age < 18) {
//         return "You can drive if you have an adult with you!"
//     } else if(age > 18) {
//         return "Yes, you can drive!"
//     }
// }

// console.log(canDrive(2));
// console.log(canDrive(16));
// console.log(canDrive(22));
// console.log(canDrive());

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//         console.log(argument, total)
//         total = total * argument;
//     }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// // console.log(multiply(1, 2, 3, 4)); //  24
// // console.log(multiply(1, 2, 3, 4, 5)); //  120


// function withdraw(amount, balance) {
//     if (amount === 0) {
//         return console.log("For the transaction, enter an amount greater than zero");
//     }
    
//     if (amount > balance) {
//         return console.log("Insufficient account balance");
//     } 
    
//     console.log("The withdrawal has been successful");
// }

// withdraw(0, 300); // "For the transaction, enter an amount greater than zero"
// withdraw(500, 300); // "Insufficient account balance"
// withdraw(100, 300); // "The withdrawal has been successful"

/**
 * Function Expression
 */

// // Function declaration
// function multiply1(x, y, z) {
//   console.log(`Multiplication result from decleration is ${x * y * z}`);
// }

// // Function expression
// const multiply2 = function(x, y, z) {
//   console.log(`Multiplication result from expression is ${x * y * z}`);
// }

// // Arrow functions
// const multiply3 = (x, y, z) => {
//   console.log(`Multiplication result arrow is ${x * y * z}`);
// }

// multiply1(2, 3, 4);
// multiply2(2, 3, 4);
// multiply3(2, 3, 4);

// const input = "{{}"

// HOISTING
// x()

// function x() {
//     console.log(10)
// }


// y()

// const y = function () {
//     console.log(10)
// }


// z()

// const z = () => {
//     console.log(10)
// }

// console.log(x);
// var x = 10;
// console.log(x);


// console.log(y);
// let y = 10;











function filterArray(numbers, value) {
   // Change code below this line

  const resultsArray = [];

    for (let idx = 0; idx < numbers.length; idx++){
        const currentNumber = numbers[idx];

        if(currentNumber > value){
        resultsArray.push(currentNumber);
        }
  }

  return resultsArray;

  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3))