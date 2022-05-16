//Create Class & Constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  // Getters
  get getname() {
    return this.name;
  }
  get getId() {
    return this.id;
  }
  get getEmail() {
    return this.email;
  }
  get getRole() {
    return this.role;
  }
}

//Export Class
module.exports = Employee;
