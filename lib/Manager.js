// Add dependency of Employee in order to extend class
const Employee = require("./Employee");

// Extend Manager Class from Employee Class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //super standard employee information
    super(name, id, email);
    // add role-specific information
    this.officeNumber = officeNumber;
    //Hard code in role to return Manager
    this.role = "Manager";
  }

  //Getter Methods for Manager

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

//Export Class

module.exports = Manager;
