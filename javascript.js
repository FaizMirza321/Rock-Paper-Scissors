const options = ["rock","paper","scissors"];

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
function resetScore(){
    humanScore = 0;
    computerScore = 0;
}
function getComputerChoice(min, max){
    let num = Math.floor((Math.random() * max)+ min);
    return numtoChoice(num);
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?");
    choice.toLowerCase;
    let validated = false
    while (validated==false)
        if (options.includes(choice)){
            validated=true;
        }
        else{
            console.log("invalid choice");
            choice = prompt("rock, paper or scissors?");
            choice.toLowerCase;
        }
    
    return choice;

}



let humanScore = 0;
let computerScore = 0; 
let humanChoice;

const btns = document.querySelectorAll(".choice")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("bbbb")
        console.log(btn.textContent)
        console.log("aaaa")
    
    })
});


function playRound(humanChoice, computerChoice){
    console.log(humanChoice + " human")
    console.log(computerChoice + " computer")
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore+=1;
        console.log("You won this round! " + humanChoice + " beats " + computerChoice)
    }
    else if (humanChoice=="scissors" && computerChoice=="paper"){
        humanScore+=1;
        console.log("You won this round! " + humanChoice + " beats " + computerChoice)
    }
    else if (humanChoice=="paper" && computerChoice=="rock"){
        humanScore+=1;
        console.log("You won this round! " + humanChoice + " beats " + computerChoice)
    }
    else if(humanChoice==computerChoice){
        console.log("Tie round, you both picked:" + humanChoice)
    }
    else{
        computerScore+=1;
        console.log("You lost this round! " + computerChoice + " beats " + humanChoice)
    }
}









/*function playGame(){
    let humanScore = 0;
    let computerScore = 0; 
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(1,3);
    playRound(humanChoice, computerChoice);


    function playRound(humanChoice, computerChoice){
        console.log(humanChoice + " human")
        console.log(computerChoice + " computer")
        if(humanChoice == "rock" && computerChoice == "scissors"){
            humanScore+=1;
            console.log("You won this round! " + humanChoice + " beats " + computerChoice)
        }
        else if (humanChoice=="scissors" && computerChoice=="paper"){
            humanScore+=1;
            console.log("You won this round! " + humanChoice + " beats " + computerChoice)
        }
        else if (humanChoice=="paper" && computerChoice=="rock"){
            humanScore+=1;
            console.log("You won this round! " + humanChoice + " beats " + computerChoice)
        }
        else if(humanChoice==computerChoice){
            console.log("Tie round, you both picked:" + humanChoice)
        }
        else{
            computerScore+=1;
            console.log("You lost this round! " + computerChoice + " beats " + humanChoice)
        }
    }

    
    if (humanScore>computerScore){
        console.log("You won! Your score was: " + humanScore + " Computer score was: " + computerScore)
    }
    else if (humanScore<computerScore){
        console.log("You lost! Your score was: " + humanScore + " Computer score was: " + computerScore)
    }
    else{
        console.log("It's a tie! Your score was: " + humanScore + " Computer score was: " + computerScore)
    }
    console.log("The end")
    
}*/
//playGame();
