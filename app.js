let userPoints = 0, computerPoints = 0;

function determineWinner(userChoice, computerChoice) {
    if (computerChoice === userChoice) {
        console.log("It's a tie! Let's play again.");
        startGame();
    } else if (userChoice === "rock") {
        if (computerChoice == "scissors") {
            userPoints++;
            console.log("You Win!");
        } else if (computerChoice === "paper") {
            computerPoints++;
            console.log("Computer Wins :(");
        }
    } else if (userChoice === "paper") {
        if (computerChoice == "scissors") {
            computerPoints++;
            console.log("Computer Wins :(");
        } else if (computerChoice === "rock") {
            userPoints++;
            console.log("You Win!");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice == "rock") {
            computerPoints++;
            console.log("Computer Wins :(");
        } else if (computerChoice === "paper") {
            userPoints++;
            console.log("You Win!");
        }
    } else {
        alert("Please enter a valid choice.")
    }
}

function startGame() {
    let userInput = prompt("Choose one of the following: rock, paper, scissors.").toLowerCase().trim();
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(`Computer chose ${computerChoice}`);
    determineWinner(userInput, computerChoice)

}

for (let i = 0; i < 5; i++) {
    startGame();
}

console.log(`Final Results:\nYou won ${userPoints} times.\nComputer won ${computerPoints} times.`);