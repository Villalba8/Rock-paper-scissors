var getUserChoice = function (userInput){
    userInput = userInput.toLowerCase();
    if (userInput ==='rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
} else {
    console.log('error, must try again');
}
};

var getComputerChoice = function () {
var randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0) {
    return 'rock';
} else if (randomNumber === 1){
    return 'paper';
}else if (randomNumber ===2) {
    return 'scissors';
}
};
var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The result is a tie';
    }
    if (userChoice === 'bomb') {
        return 'user won without a doubt'
    }

if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
    return 'computer won'; 
}
if (computerChoice === 'scissors') {
    return 'the user won';
}
}

if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'the computer won';
    }


    if (computerChoice === 'rock') {
        return 'the user won';
    }
  }


if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return 'computer won';
    }

if (computerChoice === 'paper') {
    return 'user wins this time';
}
}
}

var playGame = function (){
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log('The user choice', userChoice);
    console.log('The computer choice', computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
