// Include dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Require Team Member Classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Add empty Arrays to store Role Data
const managers = [];
const engineers = [];
const interns = [];

// Add prompt for new Team member
const getTeamMembers = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "getTeamMembers",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
      if (answers.getTeamMembers === true) {
        typeOfMember();
      } else {
        console.log(managers, engineers, interns);
        module.exports = managers;
        module.exports = engineers;
        module.exports = interns;
        deleteHTML();
        topHTMLFile();
        managerBuilder();
        engineerBuilder();
        internBuilder();
        bottomHTMLFile();
        return answers;
      }
    });
};

//Type of Team member

const typeOfMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the new employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    // Create next step to determine which question list to move to next
    .then((answers) => {
      if (answers.role === "Manager") {
        managerPrompts();
      } else if (answers.role === "Engineer") {
        engineerPrompts();
      } else if (answers.role === "Intern") {
        internPrompts();
      }
    });
};

typeOfMember();

// Manager Questions
const managerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's employee id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message:
          "What is the office phone number? (enter numbers only ex '6129635822')",
      },
    ])

    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.phone
      );
      managers.push(newManager);
      typeOfMember();
    });
};

// Engineer Questions
const engineerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's employee id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github username (ex: MrSuperC0d3r99)",
      },
    ])

    .then((answers) => {
      const newEngineer = new Engineer(
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

const internPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's employee id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "Where does the intern go to school?",
      },
    ])

    .then((answers) => {
      const newIntern = new Intern(
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

// Delete Boilerplate index.html file
const deleteHTML = () => {
  fs.unlinkSync("./index.html");
};

// Add Top HTML
const topHTMLFile = () => {
  fs.appendFileSync("index.html", generateHTML());
};

// Append Manager
const managerBuilder = () => {
  managers.forEach((manager) => {
    fs.appendFileSync("index.html", generateManager(manager));
  });
};

// Append Engineer
const engineerBuilder = () => {
  engineers.forEach((engineer) => {
    fs.appendFileSync("index.html", generateEngineer(engineer));
  });
};

// Append Intern
const internBuilder = () => {
  interns.forEach((intern) => {
    fs.appendFileSync("index.html", generateIntern(intern));
  });
};

// Add HTML Bottom
const bottomHTMLFile = () => {
  fs.appendFileSync("index.html", generateBottomHtml());
};

// Generate HTML
const generateHTML = () => {
  return ` 
<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
     crossorigin="anonymous"/>
    <link rel="stylesheet" href="./dist/style/style.css"/>
    
     <title>Team Profile Generator</title>
 </head>
 <body>
     <div class="container-fluid">
         <div class="row">
             <div class="col-12 jumbotron mb-3 team-heading">
                 <h1 class="text-center">Team Generator</h1>
             </div>
         </div>
     </div>`;
};

// Add Manager Card HTML Code Block 
const generateManager = (manager) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Manager</h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${manager.name}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>
</div>`
};

// Add Engineer Card HTML Code Block
const generateEngineer = (engineer) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="engineer">Engineer</h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${engineer.name}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
</div>`
}

// Add Intern Card HTML Code Block
const generateIntern = (intern) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="intern">Intern</h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${intern.name}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Id: ${intern.id}</p>
                <p>Role: ${intern.role}</p>
                <p>School: ${intern.school}</p>
        </div>
</div>`
};

// Generate Bottom of HTML document
const generateBottomHtml = () => {
    return `</body>
    </html>`
}

// // Call init Function
// ini
