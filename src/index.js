import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
inquirer
    .prompt([
    {
        type: "number",
        name: "userGuess",
        message: " Greetings!! Write your guess between 1 to 10: ",
    },
])
    .then((answers) => {
    const userGuess = answers.userGuess;
    console.log(userGuess, "userGuess", systemGeneratedNo, "SYs");
    if (userGuess === systemGeneratedNo) {
        console.log(" Congrats your answer is correct \n You Win!");
    }
    else {
        console.log("Please try again Better luck next time!");
    }
});
