import inquirer from "inquirer"; 
import chalk from "chalk"

import {  Addition } from "./Addition.js";
import { Subtraction } from "./Subtraction.js";
import { Mutiplication } from "./Mutiplication.js"; 
import { Division } from "./Division.js";


async function main() {
  const choices = ["Addition", "Subtraction", "Multiplication", "Division"];
  const { operation } = await inquirer.prompt({
    type: "list",
    name: "operation",
    message: "Dear user kindly select an operation:", 

    choices, 
  });

  const { num1, num2 } = await inquirer.prompt([
    {
      type: "input",
      name: "num1",
      message: "Kindly enter the first number",
      validate: (input) => !isNaN(input), 
    },
    {
      type: "input",
      name: "num2",
      message: "Kindly enter the second number",
      validate: (input) => !isNaN(input), 
    },
  ]);

  let result : number; 
  switch (operation) { 
    case "Addition":
      result = Addition(Number(num1), Number(num2));
      break;
    case "Subtraction":
      result = Subtraction(Number(num1), Number(num2));
      break;
    case "Multiplication":
      result = Mutiplication(Number(num1), Number(num2)); 
      break;
    case "Division":
      result = Division(Number(num1), Number(num2));
      break;
    default:
      result = NaN;
      break;
  }
  console.log(chalk.bgBlack.redBright.bold.underline(`Result of ${operation}: ${result}`)); 
}

main(); // Call the main function to start the program


