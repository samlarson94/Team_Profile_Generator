//Add dependency of Employee - need in order to extend class
const Employee = require('./Employee');

//Extend Employee Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super standard employee information
    super(name, id, email);
        // add role-specific information
    this.officeNumber = officeNumber;
        //Hard code in role to return Manager
    this.role = "Manager";
}

//Getters for Manager

getOfficeNumber() {
    return this.officeNumber;
}

getRole() {
    return this.role;
}

};


//Export Class

module.exports = Manager;