
import inquirer from "inquirer";
import chalk from "chalk"
const todos : string[]= [];
let loop = true;

const promptTodo = async () => {
    console.log(chalk.yellow.bold('\nWelcome to your Todo List!\n'));

    while (loop) {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'TODO',
                message: 'What do you want to add in your todo?'
            },
            {
                type: 'confirm',
                name: 'addmore',
                message: 'Do you want to add more todo?',
                default: false
            }
        ]);

        const { TODO, addmore } = answers;
        console.log(answers);
        loop = addmore;

        if (TODO.trim()) {
            todos.push(TODO);
            console.log(chalk.green.bold('Todo added successfully!\n'));
        } else {
            console.log(chalk.red.bold('Please add valid input.\n'));
        }
    }

    if (todos.length > 0) {
        console.log(chalk.cyan.bold('\nYour Todo List:\n'));
        todos.forEach((todo, index) => {
            console.log(chalk.blue.bold(`${index + 1}. ${todo}`));
        });
    } else {
        console.log(chalk.yellow.bold('\nNo todos found.\n'));
    }
};

promptTodo();
