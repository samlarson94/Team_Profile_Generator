// Include dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Require Team Member Classes
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Add empty Arrays to store Role Data
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
        .then((answers) => {
            if(answers.getTeamMembers === true) {
                typeOfMember();
            }else{
                console.log(managers, engineers, interns);
                module.exports = managers;
                module.exports = engineers;
                module.exports = interns;
                // deleteHTML();
                // topHTMLFile();
                // generateManager();
                // generateEngineer();
                // generateIntern();
                // bottomHTMLFile();
                return answers;
            }
        });
};

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
     .then((answers) => {
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
const managerPrompts = () => {
    inquirer 
    .prompt( [
        {
        type: 'input',
        name: 'name',  
        message: "What is the Manager's name?"
        }, 
        {
        type: 'input', 
        name: 'id',
        message: "What is the Manager's employee id number?"
        }, 
        {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email address?"
        }, 
        {
        type: 'input',
        name: 'officeNumber',
        message: "What is the office phone number? (enter numbers only ex '6129635822')"
        }
    ])

    .then((answers) => {
        const newManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.phone
        );
        managers.push(newManager);
        typeOfMember();
    });

}

// Engineer Questions
const engineerPrompts = () => {
    inquirer 
    .prompt( [
        {
        type: 'input',
        name: 'name',  
        message: "What is the Engineer's name?"
        }, 
        {
        type: 'input', 
        name: 'id',
        message: "What is the Engineer's employee id number?"
        }, 
        {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?"
        }, 
        {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username (ex: MrSuperC0d3r99)"
        }
    ])

    .then((answers) => {
        const newEngineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        engineers.push(newEngineer);
        typeOfMember();
    });

};

// Intern Questions

const InternPrompts = () => {
    inquirer 
    .prompt( [
        {
        type: 'input',
        name: 'name',  
        message: "What is the Intern's name?"
        }, 
        {
        type: 'input', 
        name: 'id',
        message: "What is the Intern's employee id number?"
        }, 
        {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?"
        }, 
        {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?"
        }
    ])

    .then((answers) => {
        const newIntern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        interns.push(newIntern);
        typeOfMember();
    });

};


// ==== Generate HTML ====



//Append Manager - add to html and call generateManager()

//Append Engineer- add to html and call generateEngineer()

//Append Intern - add to html and call generateIntern()

//====== Need function to delete existing HTML before compiling new Team??

//Append HTML Top
//Append HTML Bottom

//Add generateHTML function  -- Provide overall page structure.  Will need to pass full HTML skeleton in as an object literal.  Add all relevant links/scripts

//Add individual generateIntern, generateManager, generateEngineer functions to pass information into HTML div's




//////////////////////////////

// // Create a Function to write responses to HTML file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => 
//     if (err) {
//         console.log(err);
//         return;
//     }
// )};

// // Create a Function to initialize app

// function init() {
//     inquirer
//     .prompt(questions)
//     .then((answers) => {
//         var htmlInput = generateHTML(answers);
//         writeToFile("./dist/index.html", htmlInput);
//     })

//     .catch((error) => {
//         if (error.isTtyError) {
//             //Prompt couldn't be rendered in the current environment
//             console.log("Something went wrong")
//         } else {
//             // Something went wrong
//             console.log("Something went wrong")
//         }
//     });
// }



// // Call init Function
// init();