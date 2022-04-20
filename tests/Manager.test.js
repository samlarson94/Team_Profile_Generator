// Add Dependencies
const Manager = require('../lib/Manager');

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

//Test Office Number Object

describe("officeNumber", () => {
    it("create new office number", () => {
        const obj = new Manager("Sam", 19, "sam@yahoo.com", "samlarson94", 9524326261);
        expect(obj.github).toEqual(9524326261);
    });
});

//==== Test Methods ======

//Test getOfficeNumber() Method
describe("getOfficeNumber", () => {
    it("should return officeNumber by getOfficeNumber method", () => {
        const obj = new Manager("Sam", 19, "sam@yahoo.com", "samlarson94", 9524326261);
        expect(obj.getOfficeNumber()).toEqual(9524326261);
    });
});

});
//Test Constructors??