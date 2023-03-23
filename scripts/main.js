/*
function: getComputerChoice
randomly returns a component of the game; ie, rock, paper or scissors
*/

function getComputerChoice() {
    const rpsArr = ["Rock", "Paper", "Scissors"];
    const rpsArrIndex = Math.floor(Math.random() * rpsArr.length);
    const rpsArrItem = rpsArr[rpsArrIndex];
    return rpsArrItem;
}
getComputerChoice();
console.log("COMPUTER CHOICE: ", getComputerChoice());


/*
function: playRound(playerSelection, computerSelection)
plays a single round of the game
returns, for example: "You Lose! Paper beats Rock"
parameters are case-insensitive
- rock beats scissors
- paper beats rock
- scissors beats paper
*/
function playRound(playerSelection, computerSelection) {
    console.log("USER CHOICE: Rock");
    
    if(typeof playerSelection !== "string") {
        return "Enter something valid, for example, Rock, Paper or Scissors!" 
    } else {
        if(playerSelection === "rock") {
            if(computerSelection == "Rock") {
                return "Draw! Try again";
            } else if(computerSelection == "Scissors") {
                return "You Lose! Rock beats Scissors";
            } else if(computerSelection == "Paper") {
                return "You win! Paper beats Rock";
            }
        }  else if(playerSelection === "paper") {
            if(computerSelection == "Paper") {
                return "Draw! Try again";
            } else if(computerSelection == "Scissors") {
                return "You Lose! Scissors beats Paper";
            } else if(computerSelection == "Rock") {
                return "You win! Paper beats Rock";
            }
        } else if(playerSelection === "Scissors") {
            if(computerSelection == "Scissors") {
                return "Draw! Try again";
            }else if(computerSelection == "Rock") {
                return "You Lose! Scissors beats Rock";
            } else if(computerSelection == "Paper") {
                return "You win! Scissors beats Paper";
            }
        }
        /*else {
            return `You win ${playerSelection} beats ${computerSelection}`;
        }*/
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*
return the results of function call NOT console.log
*/


/*
function: game
call playRound function inside this function
Intention: play 5 round game that:
- keeps the score
- reports a winner or loser at the end
Recommendation: Use loops, ie, for loops
Use console.log to display results of each round & winner at the end
Use prompt to get user's input
*/