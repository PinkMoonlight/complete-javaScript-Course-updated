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
