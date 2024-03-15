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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

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
    if (mainH1.textContent === "You lose!") {
        return
    }
    if (mainH1.textContent === "You win!") {
        return
    }
    // if (secretNumber < 0) {}
    // if (secretNumber > 20) {}
    attempts++;
    attempt--;
    attempsOutput.innerText = `Attempts: ${attempt}`;
    if (attempts < 20) {
        num = Number(guesInput.value);
        if (num > secretNumber) {hintTxt.innerText = "Too high";}
        if (num < secretNumber) {hintTxt.innerText = "Too low";}
        // let secretNumber = Math.trunc(Math.random() * 20) + 1;
        // misteryBox.innerText = secretNumber;
        if (num === secretNumber) {
            misteryBox.innerText = secretNumber;
            hintTxt.innerText = "Correct Number!";
            document.querySelector("main").style.backgroundColor = "green";
            mainH1.innerText = `You win!`
            HigthScore.innerText = `High Score: ${attempts}`;
        }
    }
    else {
        misteryBox.innerText = secretNumber;
        document.querySelector("main").style.backgroundColor = "red";
        mainH1.innerText = `You lose!`
    }
}