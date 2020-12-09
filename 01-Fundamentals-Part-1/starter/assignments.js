        // JS Fundamentals Part 1
//Values and Variables
let country = 'Australia';
const continent = 'Australia';
let population = 25000000; 

console.log(country, continent, population);

// Data Types
const isIsland = true;   
let language;

console.log(isIsland, population, country, language);

// let, const, var
language = 'English';
//isIsland = false;

//Basic Operators 
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population + 1);
let moreThenFinland = population > 6000000;
console.log(moreThenFinland);
let lessThenAverage = population < 33000000;
console.log(lessThenAverage);
let description = country + ' is on the continent of ' + continent + ', and its ' + population / 1000000 + ' million people speak '+ language + '.';
console.log(description);

//Strings and Template Literals
description = `${country} is on the continent of ${continent}, and its ${population /1000000} million people speak ${language}.`;
console.log(description);

//Taking Decisions: if / else Statements
if (population > 33000000) {
        console.log(`${country}'s population is above average.`)
} else {
        console.log(`${country}'s population is ${(33000000 - population) / 1000000} million below average.`)
}

// Type Conversion and Coercion
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143 

// Equality Operators: == vs. ===
