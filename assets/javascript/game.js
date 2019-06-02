
//Array of options
var computerChoices = ["a", "b", "c", "d", "e", "f"];

//variables for wins, losses, and guesses    
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//variable for each html element to update their text
var winsCount = document.getElementById("wins");
var lossesCount = document.getElementById("losses");
var guessesCount = document.getElementById("guesses-left");
var lettersUsed = document.getElementById("your-guesses-so-far");

//computer random letter selection
//user choise on key press
document.onkeyup = function (event) {
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var userGuess = event.key;

// Testing:
//console.log("userGuess: ", userGuess);
// console.log("computerChoise: ", computerChoice);
// console.log(winsCount.textContent);
// console.log(lossesCount.textContent);


//the logic that determins the outcome of the game
//If computer choise and user choice match then add 1 to wins count; reset guesses to 5; alert win message; and add used letters.
if(userGuess === computerChoice){
    wins++;
    winsCount.textContent = wins;
    guessesLeft = 5;
    alert("You Win, Play Again");
    lettersUsed.textContent = "";
}
else if (guessesLeft === 0) {
    losses++;
    lossesCount.textContent = losses;
    guessesLeft = 5;
    alert("Game Over, Play Again");
    lettersUsed.textContent = "";
}
else if (userGuess !== computerChoice){
    alert("wrong");
    guessesLeft--;
guessesCount.textContent = guessesLeft;
lettersUsed.textContent += userGuess + ", "; //add the letters used and additional letters
}


}

