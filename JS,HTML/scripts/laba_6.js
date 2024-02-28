// Task 1
// Create player arrays for each team
const game = {
    team1: 'Bayern Munich',
    team2: 'Atletico Madrid',
    players: [
        [
            'Neuer',
            'Kimmich',
            'Sule',
            'Alaba',
            'Davies',
            'Goretzka',
            'Muller',
            'Gnabry',
            'Coman',
            'Lewandowski'
        ],
        [
            'Oblak',
            'Trippier',
            'Gimenez',
            'Hermoso',
            'Lodi',
            'Koke',
            'Saul',
            'Lemar',
            'Felix',
            'Correa'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Goretzka'],
    date: 'Nov 21st, 2020',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
};
const players1 = ['Neuer', 'Kimmich', 'Sule', 'Alaba', 'Davies', 'Goretzka', 'Muller', 'Gnabry', 'Coman', 'Lewandowski'];
const players2 = ['Oblak', 'Trippier', 'Gimenez', 'Hermoso', 'Lodi', 'Koke', 'Saul', 'Lemar', 'Felix', 'Correa'];

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, draw, team2 } = game.odds;

function printGoals(...playerNames) {
    console.log(`Total goals scored: ${playerNames.length}`);
    playerNames.forEach((playerName) => {
        console.log(playerName);
    });
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log(team1 < team2 && 'Team 1 is more likely to win' || 'Team 2 is more likely to win');

// Task 2
// Loop over the game.scored array and print each player name to the console, along with the goal number
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
let averageOdd = 0;
for (const odd of odds) {
    averageOdd += odd;
}
averageOdd /= odds.length;
console.log(`Average odd: ${averageOdd}`);

// Print the 3 odds to the console in a nice formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value
const scorers = {};
game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);

// Task 3
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);

const averageMinutes = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageMinutes} minutes`);

gameEvents.forEach((event, minute) => {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute} : ${event}`);
});

// Task 4
let variableNames = `
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
`;
let button = document.createElement("button");
button.textContent = "Create";
document.body.append(document.createElement('textarea'));
document.body.append(button);
document.querySelector('button').addEventListener('click', function () {
    variableNames = `${document.querySelector('textarea').value || variableNames}`;
    document.querySelector('textarea').value = '';
    const convertToCamelCase = (variableNames) => {
        const lines = variableNames.trim().split('\n');
        const convertedNames = lines.map((line) => {
            const words = line.split('_');
            const camelCaseWords = words.map((word, index) => {
                if (index === 0) {
                    return word;
                }
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            });
            return camelCaseWords.join('');
        });
        return convertedNames;
    };

    const convertedVariables = convertToCamelCase(variableNames);
    console.log('')
    convertedVariables.forEach((variable) => {
        console.log(variable)
    });
});



