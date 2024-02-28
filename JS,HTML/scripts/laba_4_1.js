// Task 1
const populations = [100, 200, 300, 400];
console.log(populations.length === 4);

const percentages = populations.map(percentageOfWorld1);
// Метод map() возвращает новый массив с результатами преобразования, он не изменяет оригинальный массив.
console.log(percentages)
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Task 2
const neighbours = ['France', 'Spain', 'Italy'];

neighbours.push('Utopia');

neighbours.pop();

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

const index = neighbours.indexOf('Spain');
if (index !== -1) {
    neighbours[index] = 'Republic of Spain';
}
console.log(neighbours);

// Task 3
const myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'Finnish',
  population: 6000000,
  neighbours: ['Sweden', 'Norway', 'Russia'],
  describe: function() {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
};

// Task 4
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2000000;
myCountry['population'] -= 2000000;
console.log(myCountry)

// Task 5
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Task 6
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// Task 7
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
}
console.log(percentages2);

// Task 8
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Kazakhstan']];
for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbours = listOfNeighbours[i];
  for (let j = 0; j < neighbours.length; j++) {
    console.log(`Neighbour: ${neighbours[j]}`);
  }
}

// Task 9
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages3.push(percentage);
  i++;
}
console.log(percentages3);
