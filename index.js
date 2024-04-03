#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const pakistaniFoodMenu = [
    "Biryani", "Nihari", "Haleem", "Karhai", "Chapli Kebab", "Samosa", "Pakora", "Seekh Kebab", "Paratha", "Naan"
];
console.log(chalk.green.bold("Pakistani Food Menu:"));
pakistaniFoodMenu.forEach(item => {
    console.log(chalk.blue(item));
});
const main = async () => {
    let todos = [];
    let condition = true;
    while (condition) {
        let addtasks = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to order",
            },
            {
                name: "addmore",
                type: "confirm",
                message: "Do you want to add more orders",
                default: false, // default should be a boolean
            },
        ]);
        todos.push(addtasks.todo);
        condition = addtasks.addmore; // Update condition based on user input
    }
    console.log(todos);
};
main();
