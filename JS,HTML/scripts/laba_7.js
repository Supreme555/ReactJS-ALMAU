// // Task 1
// function printForecast(arr) {
//     let forecast = '';
//     for (let i = 0; i < arr.length; i++) {
//         forecast += `... ${arr[i]}ºC in ${i + 1} days `;
//     }
//     console.log(forecast);
// }

// // Test data
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// printForecast(data1);
// printForecast(data2);

// // Task 2
// function generateRandomHexColor() {
//     // Generate a random number between 0 and 16777215
//     var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     // Ensure the color has six digits by padding with zeros if necessary
//     return '#' + ('000000' + randomColor).slice(-6);
// }
// document.querySelector('.again').addEventListener('click', function() {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.score').textContent = secretNumber;
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = generateRandomHexColor();
//     document.querySelector('.number').style.width = '15rem';
// });

//Task 2


// Task 3
HigthScore = 0;
score = 0
attempts = 0;
attempt = 20

scoreTxt = document.querySelector(".Score");
misteryBox = document.querySelector(".mistery_box");
guesInput = document.querySelector(".guess");
hintTxt = document.querySelector(".hint");
HigthScore = document.querySelector(".HigthScore");
// scoreTxt.innerText = `Your Score: ${score}`;
mainH1 = document.querySelector(".game_text");
attempsOutput = document.querySelector(".attempsOut");
document.querySelector(".attempsOut").innerText = `Attempts: ${attempt}`;

hintTxt.innerText = "Start guessing...";

function reastartGame() {
    score = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    hintTxt.innerText = "Start guessing...";
    misteryBox.innerText = "?";
    // scoreTxt.innerText = `Your Score: ${score}`;
    guesInput.value = "";
    document.querySelector("main").style.backgroundColor = "#4c3435";
    mainH1.innerText = `Catch the Number!`
    attempts = 0;
    attempt = 20
    attempsOutput.innerText = `Attempts: ${attempt}`;
}
const checkNumber = () => {
    if (mainH1.textContent === "You win!") {
        reastartGame();
        return
    }
    attempts++;
    attempt--;
    attempsOutput.innerText = `Attempts: ${attempt}`;
    if (attempts < 20) {
        let secretNumber = Math.trunc(Math.random() * 20) + 1;
        misteryBox.innerText = secretNumber;
        num = Number(guesInput.value);

        if (num === secretNumber) {
            hintTxt.innerText = "Correct Number!";
            document.querySelector("main").style.backgroundColor = "green";
            mainH1.innerText = `You win!`
            HigthScore.innerText = `High Score: ${attempts}`;
        }
    }
    else {
        if (mainH1.textContent === "You lose!") {
            reastartGame();
            return
        }
        document.querySelector("main").style.backgroundColor = "red";
        mainH1.innerText = `You lose!`
    }
}