const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('sc');
const resultDiv = document.getElementById('result');
const arr = ["rock", "paper", "scissors"];

rock.addEventListener('click', function () {
    let ran = Math.floor(Math.random() * 3);
    let computerChoice = arr[ran];
    if (computerChoice === "rock") {
        resultDiv.textContent = "Draw";
    } else if (computerChoice === "paper") {
        resultDiv.textContent = "Computer Wins";
    } else {
        resultDiv.textContent = "You Win";
    }
});

paper.addEventListener('click', function () {
    let ran = Math.floor(Math.random() * 3);
    let computerChoice = arr[ran];
    if (computerChoice === "rock") {
        resultDiv.textContent = "You Win";
    } else if (computerChoice === "paper") {
        resultDiv.textContent = "Draw";
    } else {
        resultDiv.textContent = "Computer Wins";
    }
});

scissors.addEventListener('click', function () {
    let ran = Math.floor(Math.random() * 3);
    let computerChoice = arr[ran];
    if (computerChoice === "rock") {
        resultDiv.textContent = "Computer Wins";
    } else if (computerChoice === "paper") {
        resultDiv.textContent = "You Win";
    } else {
        resultDiv.textContent = "Draw";
    }
});

const sex = document.getElementById('sex');
const hoverSound = document.getElementById('hover-sound');
sex.addEventListener('click', function () {
    hoverSound.currentTime = 0;
    hoverSound.play();

})
