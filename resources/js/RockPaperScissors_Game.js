//A PLAYER AGAINST THE COMPUTER
const prompt = require("prompt-sync")();

let username = prompt("Enter your Username: ");

let symbols = ["rock", "paper", "scissors"];
let countUser = 0;
let countComputer = 0;

//Randomly select computer choice
function getComputerChoice() {
  let selectCompChoice = Math.floor(Math.random() * symbols.length);
  console.log("Computer Picked: " + symbols[selectCompChoice]);
  return symbols[selectCompChoice];
}
// console.log(getComputerChoice());
// getComputerChoice();


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
