'use strict';


// GETTING ELEMENTS

// GETTING THE TOTAL SCORE
let score = document.querySelector(".score");


// GETTING THE ROCK PAPER SCISSORS OPTIONS
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let options = document.querySelector(".options")


// SELECTING CHOICES ELEMENTS
let myChoiceDiv = document.querySelector(".mychoice");
let myChoiceImg = document.querySelector(".yourchoice");
let computerChoiceDiv = document.querySelector(".computerchoice");
let computerChoiceImg = document.querySelector(".computerChoice");


function addHidden () {
    options.classList.add("hidden");
};


// FUNCTION TO ADD HIDDEN CLASS

let clickArray = [paper, scissors, rock];
clickArray.forEach(element => {
    element.addEventListener("click", addHidden);  
});

score.textContent = 13;