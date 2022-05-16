// Add Dependencies
const Engineer = require("../lib/Engineer");

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
    it("create a new github", () => {
      const obj = new Engineer("Sam", 19, "sam@yahoo.com", "samlarson94");
      expect(obj.gitHub).toEqual("samlarson94");
    });
  });

  //=====Test Methods=====

  //METHOD - Test getGithub()

  describe("getGithub", () => {
    it("create new github through getGithub() method", () => {
      const obj = new Engineer("Sam", 19, "sam@yahoo.com", "samlarson94");
      expect(obj.getGithub()).toEqual("samlarson94");
    });
  });

  //METHOD - Test getRole()
  describe("getRole", () => {
    it("return a role by getRole() method", () => {
      const role = "Engineer"; //need to define role here
      const obj = new Engineer("Sam", 19, "sam@yahoo.com", "samlarson94");
      expect(obj.getRole()).toEqual(role);
    });
  });
});
