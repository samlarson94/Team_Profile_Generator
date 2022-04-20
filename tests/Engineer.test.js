// Add Dependencies
const Engineer = require('../lib/Engineer');

// Initialize Testing

describe("Engineer", () => {
    describe("Initialization", () => {
        // Test Object
        it("should initiate an object", () => {
            const obj = new Engineer();
            //Expect our result to equal an obhect
            expect(typeof(obj)).toEqual("object");
        });
    });

//Test Name - Not needed since this class is extended from Employee
//Test ID - Not needed since this class is extended from Employee
//Test Email - Not needed since this class is extended from Employee

//Test Github Object

describe("Github", () => {
    it("create new github", () => {
        const obj = new Engineer("Sam", 19, "sam@yahoo.com", "samlarson94");
        expect(obj.github).toEqual("samlarson94");
    });
});

//=====Test Methods=====

//Test getGithub() method
describe("getGithub", () => {
    it("create new github through getGithub() method", () => {
        const obj = new Engineer("Sam", 19, "sam@yahoo.com", "samlarson94");
        expect(obj.getGithub()).toEqual("samlarson");
    });
});

});
//Test Constructors??