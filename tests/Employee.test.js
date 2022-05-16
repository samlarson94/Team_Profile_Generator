// Add Dependencies
const Employee = require("../lib/Employee");

// Initialize Testing

describe("Employee", () => {
  describe("Initialization", () => {
    // Test Object
    it("should initiate an object", () => {
      const obj = new Employee();
      //Expect our result to equal an object
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
      expect(obj.email).toEqual("sam@yahoo.com");
    });
  });

  //==== Test Methods =====

  //METHODS - getName()
  describe("getName", () => {
    it("return name by getName() method", () => {
      const obj = new Employee("Jason");
      expect(obj.getName()).toEqual("Jason");
    });
  });

  //METHODS - getID()
  describe("getId", () => {
    it("return id by getId() method", () => {
      const obj = new Employee("Phillip", 21);
      expect(obj.getId()).toEqual(21);
    });
  });

  //METHODS - getEmail()
  describe("getEmail", () => {
    it("return email by getEmail() method", () => {
      const obj = new Employee("Jason", 21, "jason@yahoo.com");
      expect(obj.getEmail()).toEqual("jason@yahoo.com");
    });
  });

  //METHODS - getRole()
  describe("getRole", () => {
    it("return role by getRole() method", () => {
      const role = "Employee"; //need to define role here
      const obj = new Employee("Jason", 21, "jason@yahoo.com");
      expect(obj.getRole()).toEqual(role);
    });
  });
});
