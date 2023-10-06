//A PLAYER AGAINST THE COMPUTER
const prompt = require("prompt-sync")();

let username = prompt("Enter Your Username: ");

let symbols = ["rock", "paper", "scissors"];
let countUser = 0;
let countComputer = 0;

//Randomly select a computer choice
function getComputerChoice() {
  let selectCompChoice = Math.floor(Math.random() * symbols.length);
  console.log("Computer Picked: " + symbols[selectCompChoice]);
  return symbols[selectCompChoice];  
}
// console.log(getComputerChoice());


function getPlayerChoice() {
  let rockValue = symbols[0];
  let paperValue = symbols[1];
  let scissorsValue = symbols[2];
  let userValue = prompt(
    "What symbol would you like to play with? "
  ).toLowerCase();

  if (userValue === rockValue) {
    console.log(username + " you picked, rock");
    return "rock";
  } else if (userValue === paperValue) {
    console.log(username + " you picked, paper");
    return "paper";
  } else if (userValue === scissorsValue) {
    console.log(username + " you picked, scissors ");

    return "scissors";

  }

}

//PLAY GAME
function playGame(userInput, computerInput) {
  //if both answers are the same(tie), replay
  if (userInput === computerInput) {
    console.log("It's a tie, try again");
    return "tie";
  }
  //Conditions when user wins
  else if (
    (userInput == "rock" && computerInput === "scissors") ||
    (userInput == "paper" && computerInput === "rock") ||
    (userInput == "scissors" && computerInput === "paper")
  ) {
    console.log(`${username} won, ${userInput} beats ${computerInput}`);
    countUser++;
    return "won";

    //condition when user loses to computer
  } else if (
    (computerInput == "rock" && userInput === "scissors") ||
    (computerInput == "paper" && userInput === "rock") ||
    (computerInput == "scissors" && userInput === "paper")
  ) {
    console.log(`Computer won, ${computerInput} beats ${userInput}`);
    countComputer++;
    return "lose";
  } else {
    console.log(`INVALID, ENTER A VALID INPUT`);
    return "lose";

  }

}


//Create a function that counts rounds, if game is played to 2 rounds a winner or loser is displayed
function playRound() {
  let round = 0;

  //iterate through each round
  for (let i = 1; i <= 3; i++) {
    let game = playGame(getPlayerChoice(), getComputerChoice());
    if (game === "won") {
      round++;
      console.log(
        `Round: ${round},   User-Score: ${countUser}: ${countComputer} Computer-Score`
      );
    } else if (game === "lose") {
      round++;
      console.log(
        `Round: ${round},   User-Score: ${countUser}: ${countComputer} Computer-Score`
      );
    } else {
      console.log(
        `Round: ${round},   User-Score: ${countUser}:  ${countComputer} Computer-Score`
      );
    }
  }

  //if the round is up to 2, DECLARE OVERALL WINNER
  if ((round = 2 && countUser > countComputer)) {
    console.log(" You won ");
  } else if ((round = 2 && countUser < countComputer)) {
    console.log(" You lose! sorry try again  ");
  } else {
    console.log(" TIE , NO WINNER ");
  }
}

playRound();
