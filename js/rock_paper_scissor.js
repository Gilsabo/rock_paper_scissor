

let rockPaperScissorarray = ['rock','paper','scissor'];

function getComputerChoice (){
return ( rockPaperScissorarray[ (Math.floor(Math.random() * rockPaperScissorarray.length))]);
    
}  

const computerSelection = getComputerChoice();

const playerSelection = 'paper';


function playRound (playerSelection, computerSelection){
    
    if (playerSelection == 'rock' && computerSelection == 'scissor'){
    return 'You win, rock beats scissor';
    }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
    return 'You win, scissor beats paper';
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
    return 'You win, paper beats scissor';
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
    return 'You lose, paper beats rock';
    }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
    return 'You lose, rock beats scissor';
    }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
    return 'You lose, scissor beats paper';
     }else {
    return 'tie, it is getting tight in here';
    }
}

let playerScore = 0;
let computerScore = 0;


function game(){
    for ( let i = 0; i < 5; i++ ) {
        const computerSelection = getComputerChoice();
        playRound (playerSelection, computerSelection);
        if (playerSelection == 'rock' && computerSelection == 'scissor'){
            console.log('human '+ ++playerScore + 'computer' + computerScore);
            }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+ ++playerScore + 'computer' + computerScore);
            }else if(playerSelection == 'paper' && computerSelection == 'rock'){
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+ ++playerScore + 'computer' + computerScore);
            }else if(playerSelection == 'rock' && computerSelection == 'paper'){
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+playerScore + 'computer' + ++computerScore);
            }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+playerScore + 'computer' + ++computerScore);
            }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+playerScore + 'computer' + ++computerScore);
             }else {
                console.log(playRound (playerSelection, computerSelection))
                console.log('human '+ playerScore + 'computer' + computerScore);
            }
       
        }
        if (playerScore > computerScore ){
            console.log('human wins');
        }else if(computerScore > playerScore){
            console.log('computer wins');
        }else if(playerScore === computerScore){
            console.log('draw, let\'s play revange');
        }
    }
    
        
    
                
             
console.log(game());

            


