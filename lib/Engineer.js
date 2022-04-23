//Add dependency of Employee - need in order to extend class
const Employee = require('./Employee');

//Extend Employee Class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //super standard employee information
    super(name, id, this.gitHub);
        // add role-specific information
    this.gitHub = gitHub;
        //Hard code in role to return Manager
    this.role = "Engineer";
}

//Getters for Engineer

getGithub() {
    return this.gitHub;
}

getRole() {
    return this.role;
}

};


//Export Class

module.exports = Engineer;