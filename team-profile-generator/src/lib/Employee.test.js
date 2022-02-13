const Employee = require("./Employee");

const instance = new Employee("Lilly Collins", 190, "lilly.collins@gmail.com");

describe("Employee", () => {
  Test("should be an instance of Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole;

    expected(actual).toEqual(expected);
  });
  Test("should return expected name", () => {
    const expected = "Lilly Collins";
    const actual = instance.getName;

    expected(actual).toEqual(expected);
  });
  Test("should return expected id", () => {
    const expected = 190;
    const actual = instance.getId;

    expected(actual).toEqual(expected);
  });
  Test("should return expected email", () => {
    const expected = "lilly.collins@gmail.com";
    const actual = instance.getEmail;

    expected(actual).toEqual(expected);
  });

  Test("should return expected role", () => {});
});
