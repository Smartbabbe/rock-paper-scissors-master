`use strict`;

// GETTING THE TOTAL SCORE
let score = document.querySelector(".score");
let totalScore = 10;
score.textContent = totalScore;

// SELECTING THE RULES SECTION
let entireRulesButton = document.querySelector(".rules-button-overlay");
let rulesButton = document.querySelector(".rules-button");
let rulesImageDiv = document.querySelector(".rules-img-div");
let closeIcon = document.querySelector(".close-icon");

// GETTING THE ROCK PAPER SCISSORS OPTIONS
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let options = document.querySelector(".options");

// STORING THE SELECTED CHOICE
let selectedChoice = "";

// SELECTING THE FULL PAGE ASIDES THE RULES SECTION
let webPage = document.querySelector(".full-page");


// SELECTING CHOICES ELEMENTS
let myChoiceDiv = document.querySelector(".mychoice");
let myChoiceImg = myChoiceDiv.querySelector(".yourChoice");
let computerChoiceDiv = document.querySelector(".computerchoice");
let computerChoiceImg = computerChoiceDiv.querySelector(".computerChoice");
let displayChoices = document.querySelector(".displayChoices");

// SELECTING THE WIN OR LOSE OPTION
let winGame = document.querySelector(".win");
let loseGame = document.querySelector(".lose");
let resultDiv = document.querySelector(".resultDiv");
let drawGame = document.querySelector(".draw");
let playAgain = document.querySelector(".play-again");

// FUNCTION TO HIDE AND ADD HIDDEN CLASS
function controlHidden(i, show = false) {
  if (show) {
    i.classList.remove("hidden");
  } else if (!show) {
    i.classList.add("hidden");
  }
}

// FUNCTION TO RESET THE GAME
function resetGame() {
  //   totalScore = 10; // Reset score
  //   score.textContent = totalScore; // Update UI
  controlHidden(options, true);
  controlHidden(displayChoices);
  controlHidden(winGame);
  controlHidden(loseGame);
  controlHidden(drawGame);
}

// CONTROLLING WHAT HAPPENS WHEN THE GAME IS PLAYED / WHEN AN
// OPTION IS PICKED

let clickArray = [paper, scissors, rock];

clickArray.forEach((element) => {
  element.addEventListener("click", function () {
    // HIDES THE OPTIONS AND SHOWS THE GAME BOARD
    controlHidden(options, false);
    controlHidden(displayChoices, true);

    // REMOVES PREVIOUS SELECTIONS
    myChoiceDiv.classList.remove("paper", "rock", "scissors");
    computerChoiceDiv.classList.remove("paper", "rock", "scissors");
    myChoiceDiv.classList.remove(`paper-style`, `scissors-style`, `rock-style`);
    computerChoiceDiv.classList.remove(
      `paper-style`,
      `scissors-style`,
      `rock-style`
    );

    // MAKING A CHOICE AND DISPLAYING IT
    selectedChoice = element.classList[0];

    myChoiceDiv.classList.add(`${selectedChoice}-style`);
    myChoiceImg.src = `./images/icon-${selectedChoice}.svg`;

    // MAKING THE COMPUTER MAKE A RANDOM SELECTION AND DISPLAYING IT
    let randomSelection = Math.floor(Math.random() * clickArray.length);
    let compChoice = clickArray[randomSelection].classList[0];

    computerChoiceDiv.classList.add(`${compChoice}-style`);
    computerChoiceImg.src = `./images/icon-${compChoice}.svg`;

    // COMPARING RESULTS TO DETERMINE WHO WINS
    if (selectedChoice === compChoice) {
      controlHidden(drawGame, true);
    } else if (
      (selectedChoice === "rock" && compChoice === "scissors") ||
      (selectedChoice === "scissors" && compChoice === "paper") ||
      (selectedChoice === "paper" && compChoice === "rock")
    ) {
      controlHidden(winGame, true);

      // UPDATING GAME SCORE
      if (totalScore < 20) {
        totalScore++;
        score.textContent = totalScore;

        
        // CHECK IF GAME IS PLAYABLE (SCORE BETWEEN 0 AND 20)
        if (totalScore <= 0 || totalScore >= 20) {
            alert("Game over! Score must be between 0 and 20.");
            return;
          }
      }
    } else {
      controlHidden(loseGame, true);
      if (totalScore > 0) {
        totalScore--;
        score.textContent = totalScore;

        // CHECK IF GAME IS PLAYABLE (SCORE BETWEEN 0 AND 20)
        if (totalScore <= 0 || totalScore >= 20) {
          alert("Game over! Score must be between 0 and 20.");
          return;
        }
      }
    }
  });
});

// FUNCTION TO RESTART THE GAME ON CLICK OF THE PLAY AGAIN BUTTON
playAgain.addEventListener("click", resetGame);




// WORKING ON THE RULES BUTTON

rulesButton.addEventListener("click", function () {
    controlHidden(webPage);
    controlHidden(rulesImageDiv, true);
    controlHidden(rulesButton, false);
    entireRulesButton.classList.add("sm:h-screen")
    console.log(rulesImageDiv);
})

closeIcon.addEventListener("click", function() {
    controlHidden(rulesImageDiv);
    controlHidden(webPage, true);
    controlHidden(rulesButton, true);
    entireRulesButton.classList.remove("sm:h-screen");

})