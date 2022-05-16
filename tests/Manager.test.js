// Add Dependencies
const Manager = require('../lib/Manager');
const Employee = require("../lib/Employee");

// Initialize Testing
describe("Manager", () => {
    describe("Initialization", () => {
        // Test Object
        it("should initiate an object", () => {
            const obj = new Manager();
            //Expect our result to equal an object
            expect(typeof(obj)).toEqual("object");
        });
    });

//Test Name - Not needed since this class is extended from Employee
//Test ID - Not needed since this class is extended from Employee
//Test Email - Not needed since this class is extended from Employee

//Test that we can set officeNumber through constructor argument
describe("officeNumber", () => {
    it("create new office number", () => {
        const obj = new Manager("Sam", 19, "sam@yahoo.com", 9524326261);
        expect(obj.officeNumber).toEqual(9524326261);
    });
});

// ==== Test Methods ======

//METHODS - Test getOfficeNumber() Method
describe("getOfficeNumber", () => {
    it("should return officeNumber by getOfficeNumber method", () => {
        const obj = new Manager("Sam", 19, "sam@yahoo.com", 9524326261);
        expect(obj.getOfficeNumber()).toEqual(9524326261);
    });
});

//METHODS - Test getRole() Method
describe("getRole", () => {
    it("should return a role by getRole method", () => {
      const role = "Manager"; //need to define role here
      const obj = new Manager("Sam", 19, "sam@yahoo.com", 9524326261);
      expect(obj.getRole()).toEqual(role);
    });
  });


});
