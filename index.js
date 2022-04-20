// Include packages required for application to run
const inquirer = require("inquirer");
const fs = require("fs");

//Require Team Files
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateEmployees = require("./src/Employee");
const generateEngineers = require("./src/Engineer");
const generateManger = require("./src/Manager");
const generateInterns = require("./src/Intern");

// Add an Arrays to store Employee Data
const managers = [];
const engineers =[];
const interns =[];


// Add prompt for new Team member
const getTeamMembers = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'getTeamMembers',
                message: 'Would you like to add another team member?'
            }
        ])
};

/// HOW TO BREAK OUT OF THIS PROMPT STRUCTURE AND GO TO ENGINEER/MANAGER/ENGINEER SPECIFICALLY? ---> Create Seperate Sets of Questions instead of one Array

//Type of Team member 

const typeOfMember = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the new employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
   
    ])
     // Create next step to determine which question list to move to next
     then.((answers) => {
         if (answers.role === 'Manager') {
             managerPrompts();
         } else if(answers.role === 'Engineer'){
            engineerPrompts();
         } else if (answers.role === 'Intern') {
            internPrompts();
         }
     });

    };

typeOfMember();

// Manager Questions


// Engineer Questions


// Intern Questions

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
            console.log("Something went wrong")
        } else {
            // Something went wrong
            console.log("Something went wrong")
        }
    });
}



// Call init Function
init();