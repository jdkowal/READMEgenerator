// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const licenseArray = ["MIT","APACHE 2.0","GLP 3.0","BSD 3","None"]
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
        name: "title",
        message: "What is your project's name"
    },
    {
        type:"input",
        name: "description",
        message: "Write a short description of your project"
    },
    {
        type:"list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: licenseArray
    },
    {
    type:"input",
    name: "npm",
    message: "What command should be run to install dependencies?",
    default: "npm i"
    },
    {
        type:"input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type:"input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type:"input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    }

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.appendFile("README.md",)
// // TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then((data)=>{
    fs.writeFile("README.md",generateMarkdown(data), (err)=>{
        if (err) {
            console.log(err);
        }
        else {
            console.log("Generating README...");
        }
    })
})
}

// Function call to initialize app
init();