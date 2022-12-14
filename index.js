// import needed packages and files
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// array of user input questions
const questions = [
{
    message: "What is your project name?",
    type: "input",
    name: "projectTitle",
},
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
    "Mozilla Public License 2.0",
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

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Successfully created file!"))
}

// function to initialize app
function init() {
      inquirer
        .prompt(questions) 
        .then((response) => {
            // console.log(response);
            // response.projectLicense
            const fileData = markdown(response);
            writeToFile("README.md", fileData);
        })
    }
    

// Function call to initialize app
init();
