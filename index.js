const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Please enter the title for your README:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Add a table of contents here (optional):',
    },
    {
        type: 'input',
        name: 'instalInstructions',
        message: 'Please explain how to install the application:',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Please enter the usage information:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Include any credits here:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your README:',
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contribution guidelines for the project:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please add any resources for testing the application:',
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'Add your full name here:',
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the current year:',
    },
];

// Function to write README file
function createREADME(fileName, data) {
    fs.createREADME(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Data saved, file created!")
    );
}

// Function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        createREADME('exampleREADME.md', response);
    });

}

// Function call to initialize program
init();