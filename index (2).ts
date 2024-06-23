

import inquirer from "inquirer";

// 1) Computer will generate a rendom number - Done

// 2) User input far gussing number 

// 3) Compare user inputwith computer generated number and show result


const randomNumber =  Math .floor (Math .random() * 10 + 1);
console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Please guess a number: ",
    },
]);

if(answer.userGuessNumber === randomNumber){
    console.log("Congtratulations! you guessed right number, ");
}else{
    console.log("You guessed wrong number");
}