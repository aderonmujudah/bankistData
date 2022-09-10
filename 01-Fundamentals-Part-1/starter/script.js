/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM'
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'Programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 i.e 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; //x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
* /

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10; x = 10
console.log(x, y);

let averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving lessons 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); //Here the (+) operator converts the number 23 to a string and concatenates it with the rest of the sentence.
console.log('23' - '10' - 3); // this will print out 10 because the (-) operator converts the strings (23) and (10) into numbers, then opeartes as a subtractor i.e 23-10-3 =10.
console.log('23' * '2'); // here the multiplication operator converts the strings (23) and (2) into numbers and multiplies.
console.log('23' / '2');




//TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job!');
}

let height;
if (height) {
    console.log('YAY!, Height is defined');
} else {
    console.log('Height is undefined');
}




//Equality Operators
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');




//LOGICAL OPERATORS
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Congratulations Sarah, you are eligible to drive!');
// } else {
//     console.log('Warning!, Sarah is not eligible to drive!');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Congratulations Sarah, you are eligible to drive!');
} else {
    console.log('Warning!, Sarah is not eligible to drive!');
}




// CODING CHALLENGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.


const averageDolphin1 = (96 + 108 + 89) / 3;
const averagekoala1 = (88 + 91 + 110) / 3;
console.log(averageDolphin1, averagekoala1);

if (averageDolphin1 > averagekoala1) {
    console.log('Congratulations Team dolphin, you have won the competition');
} else {
    if (averageDolphin1 < averagekoala1) {
        console.log('Congratulations Team koala, you have won the competition');

    } else {
        console.log('Congratulations to both teams, you both won the competition');
    }
}

const averageBonusDolphin1 = (97 + 112 + 101) / 3;
const averageBonuskoala1 = (109 + 95 + 123) / 3;
console.log(averageBonusDolphin1, averageBonuskoala1);

if ((averageBonusDolphin1 > averageBonuskoala1) && (averageBonusDolphin1 > 100)) {
    console.log('Congratulations Team dolphin, you have won the competition');
} else {
    if ((averageBonusDolphin1 > averageBonuskoala1) && (averageBonusDolphin1 < 100)) {
        console.log("Team dolphin finished first but doesn't have enough points to win the competition");
    } else {
        if ((averageBonusDolphin1 < averageBonuskoala1) && (averageBonuskoala1 > 100)) {
            console.log('Congratulations Team koala, you have won the competition');
        } else {
            if ((averageBonusDolphin1 < averageBonuskoala1) && (averageBonuskoala1 < 100)) {
                console.log("Team koala finished first but doesn't have enough points to win the competition");
            } else {
                console.log('Congratulations to both teams, you both won the competition');
            }

        }

    }

}

const averageBonusDolphin2 = (97 + 112 + 101) / 3;
const averageBonuskoala2 = (109 + 95 + 106) / 3;
console.log(averageBonusDolphin2, averageBonuskoala2);

if ((averageBonusDolphin2 > averageBonuskoala2) && (averageBonusDolphin2 >= 100)) {
    console.log('Congratulations Team dolphin, you have won the competition');
} else {
    if ((averageBonusDolphin2 > averageBonuskoala2) && (averageBonusDolphin2 <= 100)) {
        console.log("Team dolphin finished first but doesn't have enough points to win the competition");
    } else {
        if ((averageBonusDolphin2 < averageBonuskoala2) && (averageBonuskoala2 >= 100)) {
            console.log('Congratulations Team koala, you have won the competition');
        } else {
            if ((averageBonusDolphin2 < averageBonuskoala2) && (averageBonuskoala2 <= 100)) {
                console.log("Team koala finished first but doesn't have enough points to win the competition");
            } else {
                if ((averageBonusDolphin2 === averageBonuskoala2) && ((averageBonusDolphin2 === 100) || (averageBonuskoala2 === 100))) {
                    console.log('Congratulations to both teams, you both won the competition');
                } else {
                    console.log('Commiserations, neither team have won the competition, competition should be restarted');
                }

            }

        }

    }

}





// THE SWITCH STATEMENT

const day = 'thursday';

switch (day) {
    case 'monday': // i.e day === monday
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend :D');
        break;
    default:
        console.log('not a valid day!');
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else {
    if (day === 'tuesday') {
        console.log('Prepare theory videos');
    } else {
        if (day === 'wednesday' || day === 'thursday') {
            console.log('write code examples');
        } else {
            if (day === 'friday') {
                console.log('record videos');
            } else {
                if (day === 'saturday' || day === 'sunday') {
                    console.log('enjoy the weekend :D');
                } else {
                    console.log('not a valid day!')
                }

            }

        }

    }
}




// THE CONDITIONAL (TENARY) OPERATOR
const age = 13;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('i like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 💧'
}
console.log(drink2);
console.log(`I'd like to have ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);





// Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20 %.
Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
this.It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300.
*/

const Bill = 430;
const tip = Bill >= 50 && Bill <= 300 ? 0.15 * Bill : 0.2 * Bill;
console.log(`The bill was $${Bill}, the tip was $${tip}, and the total value was $${Bill + tip}`);
