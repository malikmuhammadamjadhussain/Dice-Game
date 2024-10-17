let currentPlayer = null;
let score1 = 0;
let score2 = 0;
const targetScore = 20;

document.getElementById("rollBtn").style.display = "none";

document.getElementById("tossBtn").addEventListener("click", () => {
    tossCoin();
});

document.getElementById("rollBtn").addEventListener("click", () => {
    rollDice();
});

function tossCoin() {
    const playerChoice = document.getElementById("playerChoice").value;
    const coinResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById("result").innerText = `Coin tossed: ${coinResult}`;
    
    if (playerChoice === coinResult) {
        currentPlayer = 'Player 1';
    } else {
        currentPlayer = 'Player 2';
    }
    
    document.getElementById("result").innerText += ` - ${currentPlayer} goes first!`;
    document.getElementById("rollBtn").style.display = "inline-block";
    document.getElementById("coinToss").style.display = "none";
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 'Player 1') {
        score1 += roll;
        document.getElementById("score1").innerText = `Score: ${score1}`;
        currentPlayer = 'Player 2';
    } else {
        score2 += roll;
        document.getElementById("score2").innerText = `Score: ${score2}`;
        currentPlayer = 'Player 1';
    }
    
    document.getElementById("result").innerText += `\n${currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1'} rolled a ${roll}.`;

    checkWinner();
}

function checkWinner() {
    if (score1 >= targetScore) {
        document.getElementById("result").innerText = "Player 1 wins!";
        endGame();
    } else if (score2 >= targetScore) {
        document.getElementById("result").innerText = "Player 2 wins!";
        endGame();
    }
}

function endGame() {
    document.getElementById("rollBtn").style.display = "none";
}
