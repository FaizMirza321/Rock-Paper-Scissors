

function numtoChoice(num){
    if (num==0){
        return "rock";
    }
    else if(num==1){
        return "paper";
    }
    else if (num==2){
        return "scissors";
    }
        
}
function getComputerChoice(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let num = Math.floor(Math.random() * (maxFloored - minCeiled)+ minCeiled);
    return numtoChoice(num);
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?").toLowerCase;
    while (choice !="rock" && choice!="paper" && choice!="scissors")
        console.log("invalid choice");
        choice = prompt("rock, paper or scissors?").toLowerCase;
    
    return choice;

}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(0,2);
        playRound(humanChoice, computerChoice)
    }
    function playRound(humanChoice, computerChoice){
        console.log(humanChoice + "human")
        console.log(computerChoice + "computer")
        if(humanChoice == "rock" && computerChoice == "scissors"){
            humanScore+=1;
            console.log("You won this round! " + humanChoice + "beats " + computerChoice)
        }
        else if (humanChoice=="scissors" && computerChoice=="paper"){
            humanScore+=1;
            console.log("You won this round! " + humanChoice + "beats " + computerChoice)
        }
        else if(humanChoice==computerChoice){
            console.log("Tie round, you both picked:" + humanChoice)
        }
        else{
            computerScore+=1;
            console.log("You lost this round! " + computerChoice + "beats " + humanChoice)
        }
    }

    if (humanScore>computerScore){
        console.log("You won! Your score was: " + humanScore + "Computer score was: " + computerScore)
    }
    else if (humanScore<computerScore){
        console.log("You lost! Your score was: " + humanScore + "Computer score was: " + computerScore)
    }
    else{
        console.log("It's a tie! Your score was: " + humanScore + "Computer score was: " + computerScore)
    }
    console.log("The end")
}
playGame();
