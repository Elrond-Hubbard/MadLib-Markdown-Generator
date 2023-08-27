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
    message: 'Project Title:',
    name: 'title',
    validate: input => validateInput(input, "Please provide a title for your README file.")
},
{
    type: 'input',
    message: 'Project Description:',
    name: 'description',
    validate: input => validateInput(input, "Please provide a description of your project.")
},
{
    type: 'input',
    message: 'Installation Instructions:',
    name: 'installation',
    validate: input => validateInput(input, "Please provide instructions for installing your project.")
},
{
    type: 'input',
    message: 'Usage Instructions:',
    name: 'usage',
    validate: input => validateInput(input, "Please provide instructions for using your project.")
},
{
    type: 'input',
    message: 'Contribution Guidelines:',
    name: 'contributing',
    validate: input => validateInput(input, "Please provide contribution guidelines for your project.")
},
{
    type: 'input',
    message: 'Testing Procedures:',
    name: 'tests',
    validate: input => validateInput(input, "Please provide testing procedures for your project.")
},
{
    type: 'input',
    message: 'GitHub Username:',
    name: 'github',
    validate: input => validateInput(input, "Please enter your GitHub username.")
},
{
    type: 'input',
    message: 'Email Address',
    name: 'email',
    validateInput: input => validateInput(input, "Please enter your email address.")
},
{
    type: 'list',
    message: 'Project License:',
    name: 'license',
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
