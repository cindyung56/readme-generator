const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
{
    message: "What is your project about?",
    type: "input",
    name: "projectDescription",
},
{
    message: "How do I install this program?",
    type: "input",
    name: "projectInstallation",
},
{
    message: "How can I use this program?",
    type: "input",
    name: "projectUsage",
},
{
    message: "How can I contribute to this project?",
    type: "input",
    name: "projectContribution",
},
{
    message: "How can I test this program?",
    type: "input",
    name: "projectTesting",
},
{
    message: "What license applies to your project?",
    type: "list",
    choices: [ 
    "Apache License 2.0", 
    "GNU General Public License v3.0", 
    "MIT License",
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    "Boost Software License",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License",
    "GNU Affero General Public License v3.0",
    "GNU General Public License 2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense", 
    ],
    name: "projectLicense",
},
{
    message: "What is your GitHub username?",
    type: "input",
    name: "gitUsername",
},
{
    message: "What is your email?",
    type: "input",
    name: "userEmail",
},

];

// Description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Successfully created file!"))
}

// TODO: Create a function to initialize app
function init() {
      inquirer
        .prompt(questions) 
        .then((response) => {
            console.log(response);
        })
    }
    


// Function call to initialize app
init();
