// Add Dependencies
const Employee = require('../lib/Employee');

// Initialize Testing

describe("Employee", () => {
    describe("Initialization", () => {
        // Test Object
        it("should initiate an object", () => {
            const obj = new Employee();
            //Expect our result to equal an obhect
            expect(typeof(obj)).toEqual("object");
        });
    });

//==== Test Objects =====

//Test for Name
describe("Name", () => {
    it("create a new name", () => {
        const obj = new Employee("Sam");
        expect(obj.name).toEqual("Sam");
    });
});

//Test for ID
describe("Id", () => {
    it("create a new id", () => {
        const obj = new Employee("Sam", 19);
        expect(obj.id).toEqual(19);
    });
});

//Test for Email
describe("Email", () => {
    it("create a new email", () => {
        const obj = new Employee("Sam", 19, "sam@yahoo.com");
        expect(obj.id).toEqual("sam@yahoo.com");
    });
});

//Test for Role

});

//==== Test Methods ===== 


//===== Test Constructors?? ===== 