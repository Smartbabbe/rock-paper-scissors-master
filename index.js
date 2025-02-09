`use strict`;

// GETTING ELEMENTS

// GETTING THE TOTAL SCORE
let score = document.querySelector(".score");

// GETTING THE ROCK PAPER SCISSORS OPTIONS
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let options = document.querySelector(".options");

// STORING THE SELECTED CHOICE
let selectedChoice = "";

// SELECTING CHOICES ELEMENTS
let myChoiceDiv = document.querySelector(".mychoice");
let myChoiceImg = myChoiceDiv.querySelector(".yourChoice");
let computerChoiceDiv = document.querySelector(".computerchoice");
let computerChoiceImg = computerChoiceDiv.querySelector(".computerChoice");
let displayOptions = document.querySelector(".displayOptions");

// SELECTING THE WIN OR LOSE OPTION
let winGame = document.querySelector(".win");
let loseGame = document.querySelector(".lose");
let resultDiv = document.querySelector(".resultDiv");
let drawGame = document.querySelector(".draw");
let playAgain = document.querySelector(".play-again");

// FUNCTION TO HIDE CLASS
function controlHidden(i) {
  i.classList.toggle("hidden");
}

// CONTROLLING WHAT HAPPENS WHEN THE GAME IS PLAYED / WHEN AN
// OPTION IS PICKED

let clickArray = [paper, scissors, rock];

clickArray.forEach((element) => {
  element.addEventListener("click", function () {
    controlHidden(options);
    controlHidden(displayOptions);

    // MAKING A CHOICE AND DISPLAYING IT
    selectedChoice = element.classList[0];

    myChoiceDiv.classList.add(selectedChoice);
    myChoiceImg.classList.add(selectedChoice);
    myChoiceDiv.classList.add(`${selectedChoice}-style`);
    myChoiceImg.src = `./images/icon-${selectedChoice}.svg`;

    // MAKING THE COMPUTER MAKE A RANDOM SELECTION AND DISPLAYING IT
    let randomSelection = Math.floor(Math.random() * clickArray.length);
    let compChoice = clickArray[randomSelection].classList[0];

    computerChoiceDiv.classList.add(compChoice);
    computerChoiceDiv.classList.add(`${compChoice}-style`);
    computerChoiceImg.src = `./images/icon-${compChoice}.svg`;

    controlHidden(resultDiv);

    // FUNCTION TO RESTART THE GAME ON CLICK OF THE PLAY AGAIN BUTTON

    playAgain.addEventListener("click", function () {
      controlHidden(options);
      controlHidden(displayOptions);
    });

    // COMPARING RESULTS TO DETERMINE WHO WINS
    if (selectedChoice === compChoice) {
      controlHidden(drawGame);
    } else if (selectedChoice === "paper" && compChoice === "scissors") {
      controlHidden(options);
      controlHidden(winGame);
    } else if (selectedChoice === "paper" && compChoice === "rock") {
      // controlHidden(options)
      controlHidden(loseGame);
    } else if (selectedChoice === "scissors" && compChoice === "paper") {
      // controlHidden(options);
      controlHidden(loseGame);
    } else if (selectedChoice === "scissors" && compChoice === "rock") {
      // controlHidden(options);
      controlHidden(winGame);
    } else if (selectedChoice === "rock" && compChoice === "scissors") {
      // controlHidden(options);
      controlHidden(loseGame);
    } else if (selectedChoice === "rock" && compChoice === "paper") {
      // controlHidden(options);
      controlHidden(winGame);
    }
  });
});
