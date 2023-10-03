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
