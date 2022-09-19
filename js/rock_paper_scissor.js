
let rockPaperScissorarray = ['rock','paper','scissor']; 
let playerScore = 0;
let computerScore = 0


function getComputerChoice (){
return ( rockPaperScissorarray[ (Math.floor(Math.random() * rockPaperScissorarray.length))]);
}  

const computerSelection = getComputerChoice();


const playerSelectionRock = document.querySelector('.button1');
playerSelectionRock.addEventListener('click', function() {
    const computerSelection = getComputerChoice();
    document.getElementById('result').innerText = playRound('rock', computerSelection);
    document.getElementById('score').innerText = score('rock', computerSelection);
    document.getElementById('checkWinner').innerText = checkWinner(playerScore, computerScore);
  });
    
const playerSelectionScissor = document.querySelector('.button2');
playerSelectionScissor.addEventListener('click', function(){
    const computerSelection = getComputerChoice();
    document.getElementById('result').innerText = playRound('scissor',computerSelection);
    document.getElementById('score').innerText = score('scissor', computerSelection);
    document.getElementById('checkWinner').innerText = checkWinner(playerScore, computerScore);
  });

const playerSelectionPaper = document.querySelector('.button3');
playerSelectionPaper.addEventListener('click', function(){
    const computerSelection = getComputerChoice();
    document.getElementById('result').innerText = playRound('paper',computerSelection);
    document.getElementById('score').innerText = score('paper', computerSelection);
    document.getElementById('checkWinner').innerText = checkWinner(playerScore, computerScore);
  });

  
 function score(playerSelection, computerSelection ){
    ;
 if (playerSelection == 'rock' && computerSelection == 'scissor'){
     return  'human '+ ++playerScore + ' computer ' + computerScore;
}else if(playerSelection == 'scissor' && computerSelection == 'paper'){
     return 'human '+ ++playerScore + ' computer ' + computerScore;;
}else if(playerSelection == 'paper' && computerSelection == 'rock'){
     return ('human '+ ++playerScore + ' computer ' + computerScore);
}else if(playerSelection == 'rock' && computerSelection == 'paper'){
     return ('human '+playerScore + ' computer ' + ++computerScore);
}else if(playerSelection == 'scissor' && computerSelection == 'rock'){
     return ('human '+playerScore + ' computer ' + ++computerScore);
}else if(playerSelection == 'paper' && computerSelection == 'scissor'){
     return ('human '+ playerScore + ' computer ' + ++computerScore);
 }else if(playerSelection === computerSelection){
     return('human '+ playerScore + ' computer ' + computerScore);
 }
 
}

function checkWinner(playerScore, computerScore){
    if (playerScore == 5 ){
    return'human wins';
    //toggle?
    }else if(computerScore == 5){
    return'computer wins';
    }else
    return '';
}

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


///----this is a function to run the game the best of 5 authomatically without the buttons

/*function game(){
    const computerSelection = getComputerChoice();
    playRound (playerSelection, computerSelection);
        if (playerSelection == 'rock' && computerSelection == 'scissor'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+ ++playerScore + ' computer ' + computerScore);
        }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+ ++playerScore + ' computer ' + computerScore);
        }else if(playerSelection == 'paper' && computerSelection == 'rock'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+ ++playerScore + ' computer ' + computerScore);
        }else if(playerSelection == 'rock' && computerSelection == 'paper'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+playerScore + ' computer ' + ++computerScore);
        }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+playerScore + ' computer ' + ++computerScore);
        }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+ playerScore + ' computer ' + ++computerScore);
        }else if(playerSelection === computerSelection){
            console.log(playRound (playerSelection, computerSelection))
            console.log('human '+ playerScore + ' computer ' + computerScore);
             {
            }
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
console.log(game());*/

///--------- This is a non-finished shorter piece of code to run the game.

/*const buttons =  document.querySelectorAll('.buttons');
buttons.forEach((button)=> { 
    button.addEventListener('click', (e)=>{
        
        playerSelection = e.target.innerText;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        score(playerSelection, computerSelection);
        console.log(checkWinner(playerSelection, computerScore));
    });
});*/