// Include packages required for application

const fs = require("fs");
var inquirer = require("inquirer");
const generateEmployees = require("./src/Employee");
const generateEngineers = require("./src/Engineer");
const generateManger = require("./src/Manager");
const generateInterns = require("./src/Intern");
const { inherits } = require("util");


// Add an Array to store Employee Data

const employeeData = [];


// Add prompts for user to work through
const questions = [
    {
        type: "input",
        name: "manager-name",
        message: 'What is the name of your TEAM MANAGER?'
    },
    {
        type: "input",
        name: "manager-id",
        message: "What is your TEAM MANAGER's employee ID?"
    },
    {
        type: "input",
        name: "manager-email",
        message: "What is your TEAM MANAGER's email address?"
    },
    {
        type: "input",
        name: "manager-number",
        message: "What is your office's telephone number?"
    },
    {
        type: "list",
        name: "add-teammember",
        message: "Would you like to add another teammember?",
        choices: ['Engineer', 'Intern', 'No, I am finsished' ],
        default: ['Engineer']
    }
];

/// HOW TO BREAK OUT OF THIS PROMPT STRUCTURE AND GO TO ENGINEER SPECIFICLY? 

// Create a Function to write responses to HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    if (err) {
        console.log(err);
        return;
    }
)};

// Create a Function to initialize app


function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        var htmlInput = generateHTML(answers);
        writeToFile("./dist/index.html", htmlInput);
    })

    .catch((error) => {
        if (error.isTtyError) {
            //Prompt couldn't be rendered in the current environment
        } else {
            // Something went wrong
        }
    });
}



// Call init Function
init();