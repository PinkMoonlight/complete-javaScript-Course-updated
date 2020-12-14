'use strict';

// Coding Challenge 1
let calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolphinsAvg = calcAverage(44, 23, 71);
// const koalasAvg = calcAverage(65, 54, 49);

const dolphinsAvg = calcAverage(85, 54, 41);
const koalasAvg = calcAverage(23, 34, 27);

let checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas}).`
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins}).`
    } else {
        return `There is no winner.`
    }
}
console.log(checkWinner(dolphinsAvg, koalasAvg));

// Coding Challenge 2
let calcTip = function(bill){
   return  bill >= 50 && bill <=300 ? bill * .15 : bill * .2;
}

//console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
//OR
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])] 
const total = bills.map(bill => calcTip(bill) + bill);

console.log(tips);
console.log(total);

// Coding Challenge 3
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height **2)).toFixed(2);
        return this.bmi;
    }
}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height **2)).toFixed(2);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI()
console.log(john, mark);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher the ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher the ${mark.fullName}'s (${mark.bmi})!`);
}

    // continue and break
    //continue
    let years = [1984, 1951, '1982', 1945, 1979];
    console.log('----ONLY NUMBERS----');
    for (let i = 0;  i < years.length; i++ ) {
        if (typeof years[i] !== 'number') continue
        console.log(years[i], typeof years[i]);
    }

    //break
    console.log('----BREAK WITH NUMBER----');
    for (let i = 0;  i < years.length; i++ ) {
        if (typeof years[i] !== 'number') break
        console.log(years[i], typeof years[i]);
    }


// Coding Challenge 4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 =[];
const totals2 = [];

for (let i = 0; i < bills2.length; i++ ) {
    const tip = calcTip(bills2[i]);
    tips2.push(tip);
    totals2.push(tip + bills2[i]);
};

console.log(tips2);
console.log(totals2);

//BONUS CHALLENGE
let calcAvg2 = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        //console.log(sum);
    }
    return sum / arr.length;
}

console.log('Loop version Tips avg: $' + calcAvg2(tips2));
console.log('Loop version Totals avg: $' + calcAvg2(totals2));

//OR 
let calcAverage2 = function(arr) {
    return (arr.reduce((acc, cur) => acc + cur)) / arr.length;
}

let tipsAvg = calcAverage2(tips2);
let totalsAvg = calcAverage2(totals2);

console.log('Tips Avg: $' + tipsAvg);
console.log('Totals Avg: $' + totalsAvg);