const buttons = document.querySelectorAll('button');
const options = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = options[Math.floor(Math.random() * 3)];
    const result = playRound(playerChoice, computerChoice);
    displayResult(result);
    determineWinner();
  });
});

function playRound(playerSelection, computerselection) {
    if (playerSelection === computerselection) {
        return 'draw';
    } else if (playerSelection === 'rock') {
        if (computerselection === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerSelection === 'paper') {
        if (computerselection === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerSelection === 'scissors') {
        if (computerselection === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function displayResult(result) {
    if (result === 'draw') {
        const playerNode = document.querySelector('#player');
        const compNode = document.querySelector('#computer');
        playerNode.innerHTML = `Player Score: ${parseInt(playerNode.innerHTML.split(":")[1]) + 1}`;
        compNode.innerHTML = `Computer Score: ${parseInt(compNode.innerHTML.split(":")[1]) + 1}`; 
        return;       
    }
    const resultNode = document.querySelector(`#${result}`);
    console.log(resultNode.innerHTML.split(":"));
    resultNode.innerHTML = `${result.charAt(0).toUpperCase() + result.slice(1)} Score: 
                            ${parseInt(resultNode.innerHTML.split(":")[1]) + 1}`;
}

function determineWinner() {
    const playerNode = document.querySelector('#player');
    const compNode = document.querySelector('#computer');
    const playerScore = parseInt(playerNode.innerHTML.split(":")[1]);
    const compScore = parseInt(compNode.innerHTML.split(":")[1]);
    const final = document.querySelector('.winner')
    if (playerScore == 5 && compScore == 5) {
        final.innerHTML = "Draw!";
    } else if (playerScore == 5) {
        final.innerHTML = "Player Wins!"
    } else if (compScore == 5) {
        final.innerHTML = "Computer Wins!"
    }
}