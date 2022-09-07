let x = 'helloworld';
console.log(x);

let rockPaperScissorarray = ['rock','paper','scissor'];

function getComputerChoice (){
return ( rockPaperScissorarray[ (Math.floor(Math.random() * rockPaperScissorarray.length))]);
    
}  

const computerSelection = getComputerChoice();

const playerSelection = 'rock';


function playRound (playerSelection, computerSelection){
    
    if (playerSelection == 'rock' && computerSelection == 'scissor'){
    return 'You win, rock beats scissor';
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
    return 'You lose, paper beats rock';
    }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
    return 'You lose, rock beats scissor';
    }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
    return 'You win, scissor beats paper';
    }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
    return 'You lose, scissor beats paper';
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
    return 'You win, paper beats scissor';
     }else {
    return 'tie, it is getting tight in here';
    }
}
console.log(playRound(playerSelection, computerSelection));
