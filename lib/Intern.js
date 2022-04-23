//Add dependency of Employee - need in order to extend class
const Employee = require('./Employee');

//Extend Employee Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //super standard employee information
    super(name, id, email);
        // add role-specific information
    this.officeNumber = school;
        //Hard code in role to return Manager
    this.role = "Intern";
}

//Getters for Manager

getSchool() {
    return this.school;
}

getRole() {
    return this.role;
}

};


//Export Class

module.exports = Manager;