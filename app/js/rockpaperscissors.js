////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Beloww            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var player = move || getInput();
    return /* Your Expression */;
}

function getComputerMove(move) {
    var computer = move || randomPlay();
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;		    
	    if (playerMove == "rock") {
	        if (computerMove == "scissors") {
	            winner = player;
	        }
	        elseif (computerMove == "paper") {
	            winner = computer;
	        }
	        else {
	            winner = tie;
	        }
	    }
	    elseif (playerMove == "scissors") {
	        if (computerMove == "paper") {
	            winner = player;
	        }
	        elseif (computerMove == "rock") {
	            winner = computer;
	        }
	        else {
	            winner = tie;
	       }
	    }
	    elseif (playerMove == "paper") {
	        if (computerMove == "rock") {
	            winner = player;
	        }
	        elseif (computerMove == "scissors") {
	            winner = computer;
	        }
	        else {
	            winner = tie;
	        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	while (playerWins < 6 && computerWins < 6) {
		console.log ("current winner" + getWinner())
		if (getWinner() == "player") {
	    	playerWins++;
				
	        }
	        elseif (getWinner() == "computer") {
	        	computerWins++;
	     }
		 	console.log(" current score " + " computer " + computerWins);
		 	console.log(" current score " + " player " + playerWins);
		 
}
    return [playerWins, computerWins];
}

