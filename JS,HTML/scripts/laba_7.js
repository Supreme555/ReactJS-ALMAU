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

// Task 3
