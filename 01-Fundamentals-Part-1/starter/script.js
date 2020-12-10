let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is FUN!');
console.log(40 + 8 + 23 - 10);

let firstName = 'Kate';
console.log(firstName);

let PI = 3.1415;

// Coding Challenge 1

//Test Data 1:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log('Mark: ' + markBMI, 'John: ' + johnBMI);

let markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

//Test Data 2:
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log('Mark: ' + markBMI, 'John: ' + johnBMI);

markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

// Coding Challenge 2

if (markHeigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher then John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's (${markBMI})!`)
}

// Type Conversion and Coercion


// Truthy and Falsy Values
    // 5 falsy values: 0,"", undefined, null NaN


// Coding Challenge 3
// const dolphinsAvg = (96 + 108 + 89) / 3;
// const koalasAvg = (88 + 91 + 110) / 3;
// console.log(dolphinsAvg, koalasAvg);

// if (dolphinsAvg > koalasAvg) {
//     console.log('Dolpins are the winners!')
// } else if (dolphinsAvg === koalasAvg) {
//     console.log("We have a draw!!")
// } else console.log( 'Koalas are the winners!')

//     // BONUS 1
// const dolphinsAvg = (97 + 112 + 101) / 3;
// const koalasAvg = (109 + 95 + 123) / 3;
// console.log(dolphinsAvg, koalasAvg);

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log('Dolpins are the winners!')
// } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
//     console.log('Koalas are the winners!')
// } else if (dolphinsAvg >= 100 && koalasAvg >= 100) {
//     console.log( "We have a draw!!")
// } else console.log("No one wins the trophy")

    // BONUS 2
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 123) / 3;
console.log(dolphinsAvg, koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('Dolpins are the winners!')
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
    console.log("We have a draw!!")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
   console.log( 'Koalas are the winners!')
} else console.log("No one is the winner");

// Switch Statements

let day = 'monday';

switch(day) {
    case 'monday': // day === 'monday' strict comparison.
        console.log("Plan course structure.");
        console.log("Go to coding meet up.");
        break
    case 'tuesday': 
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default: 
        console.log("Not a valid day!");
}


// Expression and Statements

    // an expression will produce a value in JS
        //eg 4 + 5
        //eg 1991

    // Statements proforms action 


//////////////////// ctrl command space is for emojis 😇 ////////////////////////////

// Coding Challenge #4

const bill = 275; 
let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2 ;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is $${bill + tip}.`);

