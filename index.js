// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// An error message is displayed if questions are not answered.
function validateInput(input, message) {
    if (input) {
        return true;
    } else {
        console.log(message)
        return false
    }
}

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    validate: input => validateInput(input, "Did you forget your name?")
},
{
    type: 'input',
    message: 'What is your quest?',
    name: 'quest',
    validate: input => validateInput(input, "Have you forgotten your quest?!")
},
{
    type: 'list',
    message: 'What is your favorite color',
    name: 'color',
    choices: ['Red', 'Blue', 'Yellow'],
    default: ['Blue'],
}];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateMarkdown(answers), () => console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
}

// Function call to initialize app
init();
