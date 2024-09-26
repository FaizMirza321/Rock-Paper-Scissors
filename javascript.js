const options = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");



function restartGame(){
    humanScore = 0;
    computerScore = 0;
}
function numtoChoice(num){
    if (num==1){
        return "rock";
    }
    else if(num==2){
        return "paper";
    }
    else if (num==3){
        return "scissors";
    }
        
}
function getComputerChoice(min, max){
    let num = Math.floor((Math.random() * max)+ min);
    return numtoChoice(num);
}

function playRound(humanChoice, computerChoice){

    console.log(humanChoice + " human");
    console.log(computerChoice + " computer");

    playerText.textContent = "Player: " + humanChoice;
    computerText.textContent = "Computer: " + computerChoice;


    if(computerScore==5 || humanScore==5){
        return resultText = "Result: " + finalScore();
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        return "You won this round! " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice=="scissors" && computerChoice=="paper"){
        humanScore+=1;
        return "You won this round! " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice=="paper" && computerChoice=="rock"){
        humanScore+=1;
        return "You won this round! " + humanChoice + " beats " + computerChoice;
    }
    else if(humanChoice==computerChoice){
        return "Tie round, you both picked:" + humanChoice;
    }
    else{
        computerScore+=1;
        return "You lost this round! " + computerChoice + " beats " + humanChoice;
    }
    
}

function finalScore(){
    let temp = humanScore;
    let temp2 = computerScore;
    if (humanScore>computerScore){
        return "You won! Your score was: " + temp + " Computer score was: " + temp2;
    }
    else if (humanScore<computerScore){
        return "You lost! Your score was: " + temp + " Computer score was: " + temp2;
    }
    else{
        return "It's a tie! Your score was: " + temp + " Computer score was: " + temp2;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.textContent)
        humanChoice = button.textContent;
        computerChoice = getComputerChoice(1,3);
        resultText.textContent = playRound(humanChoice, computerChoice);
    });
});