//Task 1
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('Finland', 6, 'Helsinki');
const country2 = describeCountry('USA', 328, 'Washington D.C.');
const country3 = describeCountry('Japan', 126, 'Tokyo');

console.log(country1);
console.log(country2);
console.log(country3);
const Fun = () => {}
function fun () {}
const apple = function () {
  return 'apple';
}
//Task 2
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPopulation = 1441;
const chinaPercentage = percentageOfWorld1(chinaPopulation);
console.log(`China represents ${chinaPercentage}% of the world population`);

const indiaPopulation = 1393;
const indiaPercentage = percentageOfWorld1(indiaPopulation);
console.log(`India represents ${indiaPercentage}% of the world population`);

const usaPopulation = 331;
const usaPercentage = percentageOfWorld1(usaPopulation);
console.log(`USA represents ${usaPercentage}% of the world population`);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPercentage2 = percentageOfWorld2(chinaPopulation);
console.log(`China represents ${chinaPercentage2}% of the world population`);

const indiaPercentage2 = percentageOfWorld2(indiaPopulation);
console.log(`India represents ${indiaPercentage2}% of the world population`);

const usaPercentage2 = percentageOfWorld2(usaPopulation);
console.log(`USA represents ${usaPercentage2}% of the world population`);

//Task 4
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

describePopulation('China', 1441);
describePopulation('India', 1393);
describePopulation('USA', 331);

//Task 5
console.log('Task 5');
function days_of_a_year(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}

console.log(days_of_a_year(2021)); // 365
console.log(days_of_a_year(2022)); // 366

//Task 6
console.log('Task 6');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgYesyl, avgYertys) => {
  if (avgYesyl >= 2 * avgYertys) {
    console.log(`Yesyl win (${avgYesyl} vs. ${avgYertys})`);
  } else if (avgYertys >= 2 * avgYesyl) {
    console.log(`Yertys win (${avgYertys} vs. ${avgYesyl})`);
  } else {
    console.log("No team wins!");
  }
};

const yesylScores1 = [44, 23, 71];
const yertysScores1 = [65, 54, 49];
const yesylAverage1 = calcAverage(...yesylScores1);
const yertysAverage1 = calcAverage(...yertysScores1);
checkWinner(yesylAverage1, yertysAverage1);

const yesylScores2 = [85, 54, 41];
const yertysScores2 = [23, 34, 27];
const yesylAverage2 = calcAverage(...yesylScores2);
const yertysAverage2 = calcAverage(...yertysScores2);
checkWinner(yesylAverage2, yertysAverage2);
