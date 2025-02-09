`use strict`;

// GETTING ELEMENTS

// GETTING THE TOTAL SCORE
let score = document.querySelector(".score");


// GETTING THE ROCK PAPER SCISSORS OPTIONS
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let options = document.querySelector(".options")

// STORING THE SELECTED CHOICE 
let selectedChoice = '';
let selectedChoices = '';


// SELECTING CHOICES ELEMENTS
let myChoiceDiv = document.querySelector(".mychoice");
let myChoiceImg = document.querySelector(".yourchoice");
let computerChoiceDiv = document.querySelector(".computerchoice");
let computerChoiceImg = document.querySelector(".computerChoice");
let displayOptions = document.querySelector(".displayOptions");


// FUNCTION TO HIDDEN CLASS
function controlHidden (i) {
    i.classList.toggle("hidden");
};


let clickArray = [paper, scissors, rock];

clickArray.forEach(element => {
    element.addEventListener("click", function () {
        controlHidden(options);
        controlHidden(displayOptions);


        selectedChoice = element.classList[0];
        selectedChoices = element.classList[0];

        
        console.log(selectedChoice);
        console.log(clickArray);
    });  
});