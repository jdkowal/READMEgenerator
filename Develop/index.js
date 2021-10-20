// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "username",
        message: "What is your username?"
    },
    {
        type:"input",
        name: "email",
        message: "What is your email?"
    },
    {
        type:"input",
        name: "project-name",
        message: "What is your project's name"
    },
    {
        type:"input",
        name: "description",
        message: "Write a short description of your project"
    },
    {
        type:"input",
        name: "licence",
        message: "What kind of license should your project have?"
    },
    {
    type:"input",
    name: "npm",
    message: "What command should be run to install dependencies?"
    },
    {
        type:"input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type:"input",
        name: "need to know",
        message: "What does the user need to know about using the repo?"
    },
    {
        type:"input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log(questions);

inquirer
.prompt(questions)