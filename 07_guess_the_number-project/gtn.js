let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
//generating a random number between 1 and 100
//parseInt use to remove decimal points from the number

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");
const startOver = document.querySelector(".resultparas");

const p = document.createElement("p");

let previousGuesses = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  //if the game is active
  submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission of form
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess); // Validate
  });
}

function validateGuess(guess) {
  // This function validates the user's guess
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    previousGuesses.push(guess);
    if (numGuess === 11) {
      displaysGuess(guess);
      displayMessage(`Game Over! Rndom number was ${randomNumber}`);
      endGame();
    }else{
        displaysGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // This function checks the user's guess against the random number

    if (guess === randomNumber) {
        displayMessage(`Congratulations! ${guess} is correct!`);
        endGame();
    }
    
    else if (guess < randomNumber) {
displayMessage(`Your guess of ${guess} is too low!`);
}

else if (guess > randomNumber) {

displayMessage(`Your guess of ${guess} is too high!`);
}}


function displaysGuess(guess) {
  // This function displays the user's guess in the guess slot
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}  guesses left`;
}

function displayMessage(message) {
  // This function displays messages based on the user's guess

    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // This function ends the game and displays the final result
  userInput.value = "";
  userInput.setAttribute("disabled","");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p); 
  playGame=false
  newGame()
}

function newGame() {
  // This function resets the game for a new round
  const newGameBtn=document.querySelector("#newGame")
newGameBtn.addEventListener("click", function (e) {
randomNumber = parseInt(Math.random() * 100 + 1);
previousGuesses = [];

numGuess = 1;
guessSlot.innerHTML = "";
remaining.innerHTML = `${11 - numGuess} guesses left`;
userInput.removeAttribute("disabled");
startOver.removeChild(p);


playGame=true
}) 
}
