console.log("hello world!")

//1. create array with rps options.
//2. create function with random computer choice with array.
//3. write function that plays single round of rps, each round you return a result like "you win x beats y".
//4. write new function called game which plays 5 rounds then announces winner at the end.

//1. 
let options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score')



//2.
function randomComputerSelection(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

function getPlayerSelection(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock? Paper? Or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//3. 
//player and computer selection variables, function that compares two parameters and returns result, result announcement, function that capitalises what pl and com selected


function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
    computerSelection == 'paper' && playerSelection == 'rock' ||
    computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'computer';
    }
}

function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function result(playerSelection, computerSelection) {
    const getRound = round(playerSelection, computerSelection);
    if (getRound == 'tie') {
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        outcomeDiv.appendChild(p);
    }
    else if (getRound == 'player') {
        const p = document.createElement('p');
        p.innerText = `Player win! ${capitalise(playerSelection)} beats ${capitalise(computerSelection)}!`;
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else if (getRound == 'computer') {
        const p = document.createElement('p');
        p.innerText = `Computer win! ${capitalise(computerSelection)} beats ${capitalise(playerSelection)}!`;
        outcomeDiv.appendChild(p);
        computerScore++;
    }
}

function checkWinner(playerScore, computerScore) {
    console.log('1 ', playerScore,'2 ', computerScore)
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won! Great job!! Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.append(h2);
    }

    if (computerScore ===5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You lost! Too bad!! XP Player: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.append(h2);
    }
}

function updateScores(playerScore, computerScore) {
    playerScoreSpan.innerText = `Player: ${playerScore} `;
    computerScoreSpan.innerText = `Computer: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = randomComputerSelection(options);
    const playerSelection = 'rock';
    result(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
})

paperButton.addEventListener('click', () => {
    const computerSelection = randomComputerSelection(options);
    const playerSelection = 'paper';
    result(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = randomComputerSelection(options);
    const playerSelection = 'scissors';
    result(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner(playerScore, computerScore)
    if (playerScore == 5 || computerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
})

//4. 
/* function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = randomComputerSelection(options);
        result(playerSelection, computerSelection);
        if (round(playerSelection, computerSelection) == 'player') {
            playerScore++;
        }
        else if (round(playerSelection, computerSelection) == 'computer') {
            computerScore++;
        }
    }
    if (playerScore === computerScore) {
        console.log("Tie! No winner or loser!")
    }
    else if (playerScore > computerScore) {
        console.log("Player win! Congratulations!!")
    }
    else {console.log("Computer win! Too bad! You lose!!")}
}

game(); */


//add 3 buttons RPS
