// // Task 1
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// const total = bills.map((bill, index) => bill + tips[index]);

// // Task 2
// const arman = {
//     fullName: "Arman Halykov",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// const kuat = {
//     fullName: "Kuat Mamyrkhanuly",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// arman.calcBMI();
// kuat.calcBMI();

// if (arman.bmi > kuat.bmi) {
//     console.log(`${arman.fullName}'s BMI (${arman.bmi}) is higher than ${kuat.fullName}'s (${kuat.bmi})!`);
// } else if (kuat.bmi > arman.bmi) {
//     console.log(`${kuat.fullName}'s BMI (${kuat.bmi}) is higher than ${arman.fullName}'s (${arman.bmi})!`);
// } else {
//     console.log(`${arman.fullName} and ${kuat.fullName} have the same BMI (${arman.bmi})!`);
// }

// // Task 4
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["JavaScript", "Python", "Rust", "C++"],
//     answers: [0, 0, 0, 0],
//     registerNewAnswer: function() {
//         const answer = prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`);
//         const answerNumber = Number(answer);
//         if (answerNumber >= 0 && answerNumber < this.options.length) {
//             this.answers[answerNumber]++;
//         }
//         this.displayResults();
//     },
//     displayResults: function(type = "array") {
//         if (type === "array") {
//             console.log(this.answers);
//         } else if (type === "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`);
//         }
//     }
// };

// poll.registerNewAnswer();
// poll.registerNewAnswer();
// poll.registerNewAnswer();

// Task 5
function checkDogs(dogsAliya, dogsSaule) {
    const aliyaCopy = dogsAliya.slice();
    aliyaCopy.splice(0, 1);
    aliyaCopy.splice(-2);

    const allDogs = [...aliyaCopy, ...dogsSaule];
    // console.log(allDogs);
    allDogs.forEach((age, index) => {
        const dogNumber = index + 1;
        if (age >= 3) {
            console.log(`Dog number ${dogNumber} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${dogNumber} is still a puppy`);
        }
    });
}

// Test data 1
const aliyaData1 = [3, 5, 2, 12, 7];
const sauleData1 = [4, 1, 15, 8, 3];
checkDogs(aliyaData1, sauleData1);

// Test data 2
const aliyaData2 = [9, 16, 6, 8, 3];
const sauleData2 = [10, 5, 6, 1, 4];
checkDogs(aliyaData2, sauleData2);
