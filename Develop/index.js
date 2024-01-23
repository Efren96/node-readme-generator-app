// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title for your project."
    },

    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project"
    },

    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project."
    },

    {
        type: "input",
        name: "usage",
        message: "Please enter usage inforamtion for your project."
    },

    {
        type: "input",
        name: "contributions",
        message: "Please enter contribution guidelines for your project"
    },

    {
        type: "input",
        name: "testing",
        message: "Please enter test instructions for your project."
    },

    {
        type: "list",
        name: "license",
        message: "Please enter a license for your project.",
        choices: ["Apache", "GNU", "MIT", "BSD", "none"]
    },

    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username."
    },
    
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, generateMarkdown(data), function (err){
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(function (response){
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}

// Function call to initialize app
init();
