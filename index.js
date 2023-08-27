// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your quest?',
    name: 'quest',
},
{
    type: 'list',
    message: 'What is your favorite color',
    name: 'color',
    choices: ['Red', 'Blue', 'Yellow'],
    default: ['Blue'],
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
}

// Function call to initialize app
init();
