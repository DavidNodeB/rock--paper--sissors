const rock = document.querySelector(".rock"); 
const paper = document.querySelector(".paper"); 
const scissors = document.querySelector(".scissors"); 
const player = [rock, paper, scissors]; 
let score = document.querySelector(".score");
const result = document.querySelector(".result");
const choices = ["rock", "paper", "scissors"]; 
let computer = choices[Math.floor(Math.random() * choices.length)]; 


function Game() {
    if (player == computer) {
        result.innerText = 'Tie'; 
    } else if (player == "paper") {
        if (computer == "scissors") {
            result.innerText = "Computer wins";
        }
    } else if (player == "rock") {
        if (computer == "paper") {
            result.innerText = "Computer wins"; 
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            result.innerText = "Computer wins"; 
        }
    }
}