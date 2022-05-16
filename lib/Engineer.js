//Add dependency of Employee - need in order to extend class
const Employee = require("./Employee");

//Extend Engineer from Employee Class
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    //super standard employee information
    super(name, id, email);
    // add role-specific information
    this.gitHub = gitHub;
    //Hard code in role to return Engineer
    this.role = "Engineer";
  }

  //Getter methods for Engineer

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return this.role;
  }
}

//Export Class

module.exports = Engineer;
