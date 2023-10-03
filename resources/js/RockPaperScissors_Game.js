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

