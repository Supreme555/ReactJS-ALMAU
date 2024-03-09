// Beginning JS

// //task 1 - 2
let country = "Kazakhstan";
const continent = "Asia";
population = 19000000;
// console.log(population / 2);
// console.log(population + 1);
// console.log((population > 6000000)? "Kazakhstan's population is above Funland" : "Kazakhstan's population is below Funland");
// console.log((population > 33000000)? "Kazakhstan's population is above average" : "Kazakhstan's population is below average");
// description = `${country} is in continent, and it's ${population} people speak Kazakh`;
// console.log(description)

//task 3
// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33000000 - population} million below average`);
// }

// population = 13;
// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33000000 - population} million below average`);
// }

// population = 130;
// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33000000 - population} million below average`);
// }

// Task 4
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// Task 5
// let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }


// Task 6
// let speaksEnglish = true;
// let lessThan50Million = true;
// let isIsland = false;

// if (speaksEnglish && lessThan50Million && !isIsland) {
//     console.log("You should live in Kazakhstan :)");
// } else {
//     console.log("Kazakhstan does not meet your criteria :(");
// }

// Task 7
// language = 'english';
// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }

// Task 8
// console.log(population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`);
// population = 13;
// console.log(population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`);
// population = 130;
// console.log(population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`);

// // Task 8
// let armanMass = 78;
// let armanHeight = 1.69;
// let kuatMass = 92;
// let kuatHeight = 1.95;

// let armanBMI = armanMass / (armanHeight ** 2);
// let kuatBMI = kuatMass / (kuatHeight ** 2);

// let armanHigherBMI = armanBMI > kuatBMI;
// console.log(armanHigherBMI)

// // Task 9
// if (armanBMI > kuatBMI) {
//     console.log(`Arman's BMI (${armanBMI.toFixed(2)}) is higher than Kuat's (${kuatBMI.toFixed(2)})!`);
// } else if (kuatBMI > armanBMI) {
//     console.log(`Kuat's BMI (${kuatBMI.toFixed(2)}) is higher than Arman's (${armanBMI.toFixed(2)})!`);
// } else {
//     console.log("Arman and Kuat have the same BMI!");
// }

// Task 10
// const almatyScores = [200, 9, 100];
// const astanaScores = [88, 91, 110];

// const calculateAverageScore = (scores) => {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//         sum += scores[i];
//     }
//     return sum / scores.length;
// };

// const almatyAverageScore = calculateAverageScore(almatyScores);
// const astanaAverageScore = calculateAverageScore(astanaScores);
// console.log(almatyAverageScore, astanaAverageScore);
// if (almatyAverageScore > astanaAverageScore && almatyAverageScore >= 100) {
//     console.log("Almaty wins the trophy!");
// } else if (astanaAverageScore > almatyAverageScore && astanaAverageScore >= 100) {
//     console.log("Astana wins the trophy!");
// } else if (almatyAverageScore === astanaAverageScore && almatyAverageScore >= 100) {
//     console.log("It's a draw!");
// } else {
//     console.log("No team wins the trophy.");
// }

// Task 11
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
