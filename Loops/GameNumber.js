/*Create a game where you start with any random game number.
Ask the user to keep guesssing the game number until the user 
enters the correct value*/

let GameNum = 25;
let userNum = prompt("Guess the number");
while(userNum != GameNum){  //didn't used !== as prompt returns string so userNum becomes string and GameNum stays integer 
   userNum = prompt("You entered wrong number. Guess again");
}
console.log("Congratulations!! You have guessed the number correctly.");