// JS Fundamentals PART 2

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}.`
};

const australia = describeCountry('Australia', 25, 'Canberra');
const usa = describeCountry('USA', 328.2, 'Washington DC');
const finland = describeCountry('Finland', 6, 'Helsinki');

console.log(australia);
console.log(usa);
console.log(finland);

//Function Declarations vs. Expressions

    //function declaration
     function percentageOfWorld1(population) {
         let percentage = (population / 7900) * 100;
         return `${percentage.toFixed(1)}`;
     }

     const austPopulation = percentageOfWorld1(25);
     const usaPopulation = percentageOfWorld1(328.2);
     const finlandPopulation = percentageOfWorld1(6);

     console.log(austPopulation, usaPopulation, finlandPopulation);

     //can be called before they are defined in the code (due to hoisting);

     //function expression
     let percentageOfWorld2 = function(population) {
        let percentage = (population / 7900) * 100;
         return `${percentage.toFixed(2)}%`;
     }
    //  console.log(percentageOfWorld2(25));
    //  console.log(percentageOfWorld2(328.2));
    //  console.log(percentageOfWorld2(6));


// Arrow Functions 
     // also a function expression
     // arrow functions don't get a 'this' keyword.

let percentageOfWorld3 = (population) => {
    let percentage = (population / 7900) * 100;
    return `${percentage.toFixed(2)}%`;
}

console.log(percentageOfWorld3(25));
console.log(percentageOfWorld3(328.2));
console.log(percentageOfWorld3(6));


// Functions calling other Functions
const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation('Australia', 25));
console.log(describePopulation('USA', 328.2));
console.log(describePopulation('Finland', 6));


// Intro to Arrays
let populations = [25, 328.2, 6, 37.5];
console.log(populations.length === 4);

let percentages = [];

percentages.push(populations.map(pop => percentageOfWorld1(pop)));

console.log(percentages);

// Basic Array Operations
let neighbours = ['Italy', 'France', 'Germany', 'Austria'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('germany')) {
    console.log(`Probably not a central European Country`);
} else {
    console.log(`Must be a central European Country!`)
};

neighbours[neighbours.indexOf('France')] = 'Republic of France';
console.log(neighbours);

// Introdution to Objects
let myCountry = {
    country: 'Australia',
    capital: 'Canberra',
    language: 'English',
    population: 25,
    neighbours: ['New Zealand', 'Indonesia', 'Vanuatu', 'Fiji'],
    borderNeighbours: []
};

// Dot vs Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

console.log(myCountry.population += 2);
console.log(myCountry['population'] -= 2);

// Object Methods
myCountry.describe = function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
};
console.log(myCountry.describe());

myCountry.checkIsland = function() {
    myCountry.borderNeighbours.length > 0 ? myCountry.isIsland = false : myCountry.isIsland = true;
};
myCountry.checkIsland();
console.log(myCountry);

// Iteration: The for Loop
for (i = 1; i <=50; i++) {
    console.log(`Voter number ${i} is currently voting`);
};

//Looping Arrays, Breaking and Continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]))
}
console.log(percentages);
console.log(percentages2);

// Looping Backwards and Loops in Loops
let listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}

// The while loop
let percentages3 = [];
let y = 0;
while (y < populations.length) {
    percentages3.push(percentageOfWorld1(populations[y]))
    y++;
}

console.log(percentages3);
