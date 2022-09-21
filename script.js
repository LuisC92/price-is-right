const playerName = prompt('What is your name?');
const randomNumber = Math.floor(Math.random() * 100) + 1;
let playerGuess = prompt('Pick a number between 1 and 100');

//! Recursive Function 
//* Recommended as the function is reusable and can be called anywhere in the app
function game() {
    playerGuess = prompt('Your new number is?');

    (parseInt(playerGuess) > randomNumber) ? alert('Too High! please choose number lower than' + playerGuess) : alert('Too Low! please choose number higher than' + playerGuess)
}

while(parseInt(playerGuess) !== randomNumber){
    game();
}

alert(`${playerName} You Won`)
location.reload();

//! Oren solution
const playerName = prompt('What is your name?');
const randomNumber = Math.floor(Math.random() * 100) + 1;
let playerGuess = prompt('Pick a number between 1 and 100');
​
function game() {
    
    if (parseInt(playerGuess) > randomNumber) {
        alert('Too High! please choose number lower than' + playerGuess);
        playerGuess = prompt('Your new number is?');
        game();
    } else if (parseInt(playerGuess) < randomNumber) {
        alert('Too Low! please choose number higher than' + playerGuess);
        playerGuess = prompt('Your new number is?');
        game();
    } else if (parseInt(playerGuess) === randomNumber) {
        alert(`${playerName} You Won`)
        location.reload();
    }
​
}
​
game();

//! using while loop
//* This example below shows how you can use a while loop to solve the problem
//* (Not recommended)


// let playersNumber = parseInt(prompt("What is your guess?"))

// while (playersNumber !== randomNumber) {
//     playersNumber = parseInt(prompt("What is your guess?"))
//     console.log("playersNumber: ", playersNumber)

//     if (isNaN(playersNumber)) {
//         playersNumber = parseInt(prompt("What is your guess?"))
//     } else if (playersNumber > randomNumber) {
//         console.log("Your guess is to high")
//     } else if (playersNumber < randomNumber) {
//         console.log("Your guess is to low")
//     } else if (playersNumber == randomNumber) {
//         console.log(`${player} wins`)
//     }
// }


//! Raquel solution

// const playerName = prompt("What is your name? ");
// const random = Math.floor(Math.random() * 100) + 1;
// let playerNumber = parseInt(prompt("Enter a number between 1 and 100: "));

// while (playerNumber !== random) {
//   playerNumber = parseInt(prompt("Enter a number between 1 and 100: "));

//   if (playerNumber > random) {
//     console.log("Too high!");
//   } else if (playerNumber < random) {
//     console.log("Too low");
//   } else if (playerNumber === random) {
//     console.log(`${playerName} wins!`);
//   } else {
//     console.log("Try again");
//   }
// }