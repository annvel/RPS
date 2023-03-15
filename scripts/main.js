// computer randomly returns "Rock", "Paper" or "Scissors"

function getComputerChoice(rpsStringArray) {

    // select random item from the array
    const rpsRandomItem = Math.floor(Math.random() * rpsStringArray.length);
    return rpsStringArray[rpsRandomItem];
  }

const rpsArr = ["Rock", "Paper", "Scissors"];

const rpsRandomIndex = getComputerChoice(rpsArr)
console.log(rpsRandomIndex);


/*function getComputerChoice() {
    const rpsArr = ["Rock", "Paper", "Scissors"];
    const rpsRandomIndex = Math.floor(Math.random() * rpsArr.length);
    const rpsRandomItem = rpsArr[rpsRandomIndex];

    return rpsRandomItem;
}
//console.log(getComputerChoice());
getComputerChoice();*/

// function playing single round
function playRound(playerSelection, computerSelection) {

    //const pSelect = prompt("Enter your guess", "rock");

    if(typeof playerSelection !== "string") {
        alert("Please enter a valid guess!")
    } else {
        //alert("string");

        // case playerSelection is rock
        if(playerSelection == "rock") {
            if(computerSelection == "rock") {
                console.log("Draw! Try again!");
            } else if(computerSelection == "paper") {
                console.log("You Lose! Paper beats Rock!");
            } else {
                console.log("You Win! Rock beats Scissors!");
            }
        }
        // end playerSelection is rock

        // case playerSelection is paper
        if(playerSelection == "paper") {
            if(computerSelection == "paper") {
                console.log("Draw! Try again!");
            } else if(computerSelection == "scissors") {
                console.log("You Lose! Scissors beats Paper!");
            } else {
                console.log("You Win! Paper beats Rock!");
            }
        }
        // end playerSelection is rock

        // case playerSelection is scissors
        if(playerSelection == "scissors") {
            if(computerSelection == "scissors") {
                console.log("Draw! Try again!");
            } else if(computerSelection == "rock") {
                console.log("You Lose! Rock beats Scissors!")
            } else {
                console.log("You Win! Scissors beats Paper!")
            }
        }
        // end playerSelection is scissors

    }
}

const playerSelection = "paper";
//const playerSelection = prompt("Enter a valid guess", "rock");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));