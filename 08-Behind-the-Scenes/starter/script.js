'use strict';

function calCAge(birthYear) {
  const age = 2039 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // Var variables are function scoped, not block scoped
      const str = `Oh, and you are a millenial, ${firstName}`; // const & let are block scoped
      console.log(str);

      function add(a, b) {
        return a + b;
      } // functions are block scoped in strict mode
    }
    output = 'NEW OUTPUT'; // reassigning outter scopes variable
    console.log(millenial);
    //add(2, 3);
  }
  printAge();

  return age;
}
const firstName = 'Kate';
calCAge(1984);

// function declarations can be used/called before they are declared - because of hoisting

// Hoisting in practice with Variables

console.log(me);
// console.log(job);  TDZ
// console.log(year);  TDZ

var me = 'Kate'; // hoisted by set to undefined
let job = 'student'; // cannot access before initialization...its in TDZ
const year = 1984;

// Functions
console.log(addDecl(2, 3)); // hoisted
// console.log(addExpr(2, 3)); // TDZ
// console.log(addArrow(2, 3)); // undefined

function addDecl(a, b) {
  return a + b;
}

let addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Pitfall of hoisting Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// 'this' keyword
