# rock-paper-scissors

A game of rock paper scissors

* Step 1: 
# Setup the Project structure
    - setup the project structure: create a git repo and clone it to you computer locally.
    - create html file and js file for the projet.
    - Use the ! shortcut to create a boilerplate.
    - link the js to the html file using the script tag.
    - confirm if the link to the js file is working by logging "Hello World" to the console.

* Step 2: 
# Write the logic to get the computer choice
    - create a named arrow function 
    - randomly generate computer choice between rock paper and scissors
    - do not use arrays: if statement or switch can do the trick.
    - log your output to check if you get the result you want.

* Step 3: 
# Write the logic to get the human choice
    - create a named arrow function to get user choice.
    - create a variable to hold the response and update it making it case insensitive.
    - Exit the game if user presses cancel and alert the user of the choice made.
    - return user userchoice if they entered an answer.
    - log your output to check if you get the result you want.

* Step 4: 
# Declare the players score variable
    - create two new variables to hold the scores for each player i.e computer and human.
    - set their initial value to 0. 

* Step 5: 
# Write the logic to play a single round
    - create an arrow function for the game logic. The function will take two params that will be passed as arguments when calling the function
    - make decision as to who will win the round; rock beats scissors; paper beats rock; scissors beat paper. 
    - increment computer score if computer wins and vice versa.
    - set the tie condition as well if humanchoice is equal to computerchoice. 
    - call the getHumanChoice and getComputerChoice functions and store them in a constant variable.
    - call your function and log it to the console to test it out.

* Step 6: 
# Write the logic to play the entire game
    - create a function for the entire game and move your logic for the round into this function.
    - loop through the function for the round five times, increment the counter.
    - move your variable holding the getHumanChoice function into the scope. 
    - exit the the loop if human selection is null.
    - log the two players choice if user plays the game.
    - create a variable to hold the playRound function with choices passed as arguments 
    - log the variable to the console.

* Step 7: 
# Declare the winner
    - make a decision to determine the final winner.
    - if it's a tie log a return as such.
    - log the final score to the console.
    
# Start the game.
* call the function to start the game, in step 6 to play a five round game.
- call it again if you want to go for another round.