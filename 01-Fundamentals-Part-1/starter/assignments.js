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
language = 'english';
//isIsland = false;

//Basic Operators 
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population ++);

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
// let numNeighbours = prompt('How many neighbour countries does your country have?');
// numNeighbours = Number(numNeighbours);

// if (numNeighbours === 1) {
//         console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//         console.log(`More then 1 border`)
// } else {
//         console.log(`No borders!`)
// }

// Logical Operators
if (language === 'english' && population < 50000000 && !isIsland) {
        console.log(`You should live in ${country}.`);
} else {
        console.log(`${country} does not meet your criteria.`);
}

// The Switch Statement

switch(language) {
        case 'chinese':
        case 'mandarin':
                console.log("MOST number of native speakers!");
                break;
        case 'spanish': 
                console.log('2nd place in number of native speakers');
                break;
        case 'english':
                console.log("3rd place");
                break;
        case 'hindi':
                console.log("Number 4");
                break;
        case 'arabic':
                console.log('5th most spoken language');
                break;
        default :
                console.log("Great language too :D");
}

// The Conditional (Ternary) Operator
population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average.`);
        // OR
console.log(
        `${country}'s population is ${population > 33000000 ? 'above' : 'below'} average.` );





