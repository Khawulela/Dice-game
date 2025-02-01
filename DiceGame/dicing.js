const play1 = document.getElementById("player1Dice");
const play2 = document.getElementById("player2Dice");
const startGame = document.getElementById("roll");

startGame.onclick = function rollDice() {
    // Correct way to generate a random number between 1 and 6 (inclusive)
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1; // Player 2 should have their own roll

    let newDice = "Images/dice" + num1 + ".png";
    let newDice2 = "Images/dice" + num2 + ".png"; 

    play1.setAttribute("src", newDice);
    play2.setAttribute("src", newDice2);

    if(num1>num2){
        document.querySelector("p").innerHTML = "Player1 wins!";
    }
    else if(num2>num1){
        document.querySelector("p").innerHTML = "Player2 wins!"; 
    }
    else{
        document.querySelector("p").innerHTML = "Its a draw oaks";  
    }

}

