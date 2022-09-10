'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')




//FUNCTIONS
function logger() {
    console.log('My name is Judah');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);




//FUNCTION DELARATIONS VS EXPRESSIONS
//decalration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//EXPRESSION
const calcage2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcage2(1991);
console.log(age1, age2);




//ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Judah'));
console.log(yearsUntilRetirement(1980, 'Bob'));




//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));




//REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1
    }
}

console.log(yearsUntilRetirement(2004, 'Judah'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/




//CODING CHALLENGE #1
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`There is no winner!`);
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));




//INTRODUCTION TO ARRAYS
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//EXERCISE
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];
// ADD ELEMENTS
const newlength = friends.push('jay');//last
console.log(friends);
console.log(newlength);

friends.unshift('John');//first
console.log(friends);

//Remove Elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}




// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)


const bill = 100;
const calcTip = function (a) {
    if (300 >= a >= 50) {
        return a = (a * 0.15);
    } else {
        return a = (a * 0.2);
    }
}

console.log(calcTip(bill));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);




//Introduction to Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',




    // Dot vs Bracket notation
const friends = ['Michael', 'Peter', 'Steven']

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

jonas.firstName = 'Judah';
jonas.lastName = 'Aderonmu';
jonas.age = 2022 - 2004;
jonas.job = 'Student';
jonas.friends = ['Tito', 'Isaac', 'Chubby'];
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['last' + nameKey]);
console.log(jonas['first' + nameKey]);

const interestedIn = prompt('What do you want to know about judah? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Invalid request!! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//Challenge
// "jonas has 3 friends, and his best friend is Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is called ${jonas.friends[0]}`);




//Object Methods
const jonas = {
    firstName: 'Judah',
    lastName: 'Aderonmu',
    birthYear: 2004,
    job: 'Student',
    friends: ['Tito', 'Isaac', 'Chubby'],
    hasDriversLicense: true,

    // age: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // age: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getsummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['age'](2004));

//Challenge
console.log(jonas.getsummary());
*/




// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.valueBMI = this.mass / this.height ** 2;
        return this.valueBMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.valueBMI = this.mass / this.height ** 2;
        return this.valueBMI;
    }
};
mark.calcBMI();
john.calcBMI();

if (john.valueBMI > mark.valueBMI) {
    console.log(`${john.fullName}'s BMI (${john.valueBMI}) is higher than ${mark.fullName}'s (${mark.valueBMI})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.valueBMI}) is higher than ${john.fullName}'s (${john.valueBMI})`);
}




//Iteration : The for Loop
//for loop: keeps running while conditon is true
for (let rep = 1; rep <= 100; rep++) {
    console.log(`lifting weights repetition ${rep} 🏋🏿‍♂️`);
}




//Looping Arrays, breaking and Continuing
const judahArray = [
    'Judah',
    'Aderonmu',
    2020 - 2004,
    'Student',
    ['Tito', 'Isaac', 'Chubby'],
];
const types = [];

for (let ai = 0; ai < judahArray.length; ai++) {
    //Reading from jonas array
    console.log(judahArray[ai], typeof judahArray[ai]);

    //Filling types array
    // types[ai] = typeof judahArray[ai];
    types.push(typeof judahArray[ai]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let a = 0; a < years.length; a++) {
    //Reading from jonas array
    console.log(years[a]);

    ages.push(2022 - years[a]);
}

console.log(ages);

//continue statement
console.log('--- ONLY STRINGS ---')
for (let a = 0; a < judahArray.length; a++) {
    if (typeof judahArray[a] !== 'string') continue;

    console.log(judahArray[a], typeof judahArray[a]);
}

//Break statement
console.log('--- BREAK WITH NUMBER ---')
for (let a = 0; a < judahArray.length; a++) {
    if (typeof judahArray[a] === 'number') break;

    console.log(judahArray[a], typeof judahArray[a]);
}




//Looping Backwards and loops in loops
const judah = [
    'Judah',
    'Aderonmu',
    2020 - 2004,
    'Student',
    ['Tito', 'Isaac', 'Chubby'],
];

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏿‍♂️`);
    }
}




//The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep} 🏋🏿‍♂️`);
}

let rep = 1;

while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏿‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('You rolled a 6 \n\
    Loop is about to end');
}
*/




//Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals('tips' and 'totals')
3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument.This function calculates the average of all numbers in the given array.This is a difficult challenge(we haven't done this before)! Here is how to solve it:
4.1.First, you will need to add up all values in the array.To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop.In each iteration, add the current value to the 'sum' variable.This way, by the end of the loop, you have all values added together
4.2.To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements)
4.3.Call the function with the 'totals' array
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (Bill) {
    return Bill >= 50 && Bill <= 300 ? 0.15 * Bill : 0.2 * Bill;
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length
};

console.log(calcAverage(tips));
*/