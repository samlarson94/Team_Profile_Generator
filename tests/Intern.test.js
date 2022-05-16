// Add Dependencies
const Intern = require("../lib/Intern");

// Initialize Testing
describe("Intern", () => {
  describe("Initialization", () => {
    // Test Object
    it("should initiate an object", () => {
      const obj = new Intern();
      //Expect our result to equal an object
      expect(typeof obj).toEqual("object");
    });
  });

  //Test Name - Not needed since this class is extended from Employee
  //Test ID - Not needed since this class is extended from Employee
  //Test Email - Not needed since this class is extended from Employee

  // Test School Object
  describe("School", () => {
    it("create new school", () => {
      const obj = new Intern("Sam", 19, "sam@yahoo.com", "NDSU");
      expect(obj.github).toEqual("NDSU");
    });
  });

  // METHODS - Test getSchool() Method
  describe("getSchool", () => {
    it("should return school by getSchool() method", () => {
      const obj = new Intern("Sam", 19, "sam@yahoo.com", "NDSU");
      expect(obj.getSchool()).toEqual("NDSU");
    });
  });
  // METHODS - Test getRole() Method
  describe("getRole", () => {
    it("should return role by the getRole() method", () => {
      const role = "Intern"; //need to define role here
      const obj = new Intern(
        "Antonio",
        81,
        "wideopen@yahoo.com",
        "Central Michigan"
      );
      expect(obj.getRole()).toEqual(role);
    });
  });
});
