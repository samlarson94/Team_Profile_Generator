//Create Class and Subclasses
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    // Getters
    get getname() {
        return this.name
    }
    get getId() {
        return this.id
    }
    get getEmail() {
        return this.email
    }
    get getRole() {
        return this.role
    }

    // Methods
    getEmployeeName () {
        //GET INFO FROM User Input - pass in data.value?
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }
}
// Create Subclass for Each 

class Manager extends Employee {
    
}

// Export using Module.export