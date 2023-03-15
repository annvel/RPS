// computer randomly returns "Rock", "Paper" or "Scissors"

function getComputerChoice(rpsStringArray) {

    // select random item from the array
    const rpsRandomItem = Math.floor(Math.random() * rpsStringArray.length);
    return rpsStringArray[rpsRandomItem];
  }

const rpsArr = ["Rock", "Paper", "Scissors"];

const rpsRandomIndex = getComputerChoice(rpsArr)
console.log(rpsRandomIndex);