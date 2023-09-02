import inquirer from "inquirer"; 
import chalk from "chalk"

import {  Addition } from "./Addition.js";
import { Subtraction } from "./Subtraction.js";
import { Mutiplication } from "./Mutiplication.js"; // Corrected the import name
import { Division } from "./Division.js";
// Removed unused imports:
// import Choices from "inquirer/lib/objects/choices.js";
// import { link } from "fs";
// import { listenerCount } from "process";

async function main() {
  const choices = ["Addition", "Subtraction", "Multiplication", "Division"]; // Corrected the variable name
  const { operation } = await inquirer.prompt({
    type: "list",
    name: "operation",
    message: "Dear user kindly select an operation:", // Fixed the message

    choices, // Changed to use the correct variable name
  });

  const { num1, num2 } = await inquirer.prompt([
    {
      type: "input",
      name: "num1",
      message: "Kindly enter the first number",
      validate: (input) => !isNaN(input), // Removed the type annotation
    },
    {
      type: "input",
      name: "num2",
      message: "Kindly enter the second number",
      validate: (input) => !isNaN(input), // Removed the type annotation
    },
  ]);

  let result : number; // Changed from 'number' to 'let'
  switch (operation) { // Corrected variable name to 'operation'
    case "Addition":
      result = Addition(Number(num1), Number(num2));
      break;
    case "Subtraction":
      result = Subtraction(Number(num1), Number(num2));
      break;
    case "Multiplication":
      result = Mutiplication(Number(num1), Number(num2)); // Corrected the operation name
      break;
    case "Division":
      result = Division(Number(num1), Number(num2));
      break;
    default:
      result = NaN;
      break;
  }
  console.log(chalk.bgBlack.redBright.bold.underline(`Result of ${operation}: ${result}`)); // Moved the console.log outside the switch block
}

main(); // Call the main function to start the program


