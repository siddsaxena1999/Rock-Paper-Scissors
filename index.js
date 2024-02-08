let userScoreVal = 0;
let compScoreVal = 0;

let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const randomChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const gameDraw = () => {
    msg.style.backgroundColor = "#272D2D";
    msg.innerText = "The game was draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScoreVal++;
        userScore.innerText = userScoreVal;
        msg.style.backgroundColor = "green";
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`; 
    } else {
        compScoreVal++;
        compScore.innerText = compScoreVal;
        msg.style.backgroundColor = "red";
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = randomChoice();
    
    if (userChoice === compChoice) {
        // game draw
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // get user's choice
        playGame(userChoice);
    })
});