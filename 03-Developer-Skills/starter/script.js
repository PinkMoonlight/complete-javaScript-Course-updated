// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 99;
const y = 'hello';

// Live Server Extension

//shortcut cl = console.log
console.log();

// Practicing Problem Solving

// 1. Ask questions for understand the problem
// 2. Break up the problem into smaller sub problems, create list
// 3. Research to help solve the sub problems
// 4. For bigger problems, write pseudo-code before writing the actual problem

// PROBLEM 1 - find the amplitude of an array (difference between highest and lowest number)

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude([7, -1, 8, 'error', 5, 25, 18, 56]);
console.log(amplitude);

// CODING CHALLENGE - PROBLEM SOLVING

// STEP 1 - Ask questions
// 1. How do create and format a string of unknown length of sections? A: LOOP
// 2. How do you keep track of the days the temps belong to? A: separate variable that gets incremented each iteration
// 3. How do you make the result dynamic, no matter the length of the imput Array? A: LOOP
// 4. How do you make know the it at the end of temps, to add the last 3 dots? A: use array.length -1 to know end of loop? OR add after exiting loop, but before returning result.

// STEP 2 - Break up into sub problems
// 1. define some useful variables, and results array or results string
// 2. create a loop to extract the temperatures, insert into string,and push or concat to result
// 3. increment the days variable inside the loop
// 4. concat the last three ... to the end of string, once exited the loop
// 5. return result from function
// 6. How to type the celcius symbol A: option + shift + 8 °

const printForcast = function (maxTemps) {
  let days = 1;
  let printedString = ['...'];

  for (let i = 0; i < maxTemps.length; i++) {
    let string = ` ${maxTemps[i]}°C in ${days} days ...`;
    printedString.push(string);
    days += 1;
  }
  return printedString.join('');
};

const forecastResult = printForcast([17, 21, 23]);
const forecastResult2 = printForcast([12, 5, -5, 0, 4]);

console.log(forecastResult);
console.log(forecastResult2);

// OR

const printForcast2 = function (arr) {
  let str = '...';

  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return str;
};

const forecastResults = printForcast2([17, 21, 23]);
const forecastResults2 = printForcast2([12, 5, -5, 0, 4]);

console.log(forecastResult);
console.log(forecastResult2);
