'use strict';
/*
function describeCountry(country, population, capitalCity) {
    const information = `${country} has ${population} million people and its capital is ${capitalCity}`;
    return information;
}

describeCountry('Nigeria', 600, 'Abuja');
const nigeria = describeCountry('Nigeria', 600, 'Abuja');

const unitedStates = describeCountry('United States of America', 400, 'Washington D.C');

const britain = describeCountry('United Kingdom', 30, 'london');

console.log(nigeria);
console.log(unitedStates);
console.log(britain);


function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so its ${(population / 7900) * 100}% of the world population.`;
}
const percNigeria1 = percentageOfWorld1('Nigeria', 600);
const percChina1 = percentageOfWorld1('China', 1441);
const percUnitedStates1 = percentageOfWorld1('United States', 400)
console.log(percChina1);
console.log(percNigeria1);
console.log(percUnitedStates1);

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so its ${(population / 7900) * 100}% of the world population.`;
}
const percNigeria2 = percentageOfWorld1('Nigeria', 600);
const percChina2 = percentageOfWorld1('China', 1441);
const percUnitedStates2 = percentageOfWorld1('United States', 400)
console.log(percChina2);
console.log(percNigeria2);
console.log(percUnitedStates2);

const percentageOfWorld3 = (country, population) => {
    return `${country} has ${population} million people, so its ${(population / 7900) * 100}% of the world population.`;
}

const percNigeria3 = percentageOfWorld1('Nigeria', 600);
const percChina3 = percentageOfWorld1('China', 1441);
const percUnitedStates3 = percentageOfWorld1('United States', 400)
console.log(percChina3);
console.log(percNigeria3);
console.log(percUnitedStates3);




//FUNCTIONS CALLING OTHER FUNCTIONS
function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so its ${(population / 7900) * 100}% of the world population.`;
}

function describePopulation(country, population) {
    const describePopulation1 = percentageOfWorld1(country, population);
    return describePopulation1;
}
console.log(describePopulation('China', 1441));
console.log(describePopulation('Nigeria', 600));
console.log(describePopulation('United States', 400));

const populations = [1441, 400, 600, 30];
console.log(Boolean(populations.length === 4));

function percentageOfWorld(a) {
    return (a / 7900) * 100;
}

const percentageOfWorld1 = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentageOfWorld1);


//Basic Array Operations
const neighbours = ['Benin', 'Chad', 'Cameroon'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();

if (neighbours.indexOf('Germany')) {
    console.log('Probably not a central European country');
}
neighbours[0] = 'Republic of Benin';
console.log(neighbours);



//Introduction to Objects
const myCountry = {
    country: 'Nigeria',
    capital: 'Abuja',
    language: 'English',
    population: 600,
    neighbours: ['Benin', 'Chad', 'Cameroon']
};

//Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = myCountry.population - 2;
console.log(myCountry.population);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);


//Object Methods
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million
    ${this.language}-speaking people,
    ${this.neighbours.length} neighbouring countries and a
    capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
            false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);



//Iteration: The for Loop
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}


//Looping Arrays, Breaking and Continuing
const populations = [10, 1441, 332, 83];
const percentage2 = [];
const percentageOfWorld1 = function (p) {
    return p = (p / 7900) * 100
}

for (let p = 0; p < populations.length; p++) {
    const perc = percentageOfWorld1(populations[p]);
    percentage2.push(perc);
}
console.log(percentage2);



//Looping Backwards and loops in loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    'Spain',
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        if (typeof listOfNeighbours[i] !== 'object') continue;
        console.log(`Neighbour ${i + 1}: ${listOfNeighbours[i][y]}`);
    }
}



//The while Loop
const populations = [10, 1441, 332, 83];
const percentage3 = [];
const percentageOfWorld1 = function (p) {
    return p = (p / 7900) * 100
};

let p = 0
while (p < populations.length) {
    const perc = percentageOfWorld1(populations[p]);
    percentage3.push(perc);
    p++;
}

console.log(percentage3);
*/