const Manager = require("./Manager");

const instance = new Manager(
  "Michelle Obama",
  189,
  "michelle.obama@gmail.com",
  "12345"
);

describe("Manager", () => {
  Test("should be an instance of ", () => {
    const expected = "Intern";
    const actual = instance.getRole;

    expected(actual).toEqual(expected);
  });
  Test("should return expected name", () => {
    const expected = "Michelle Obama";
    const actual = instance.getName;

    expected(actual).toEqual(expected);
  });
  Test("should return expected id", () => {
    const expected = 189;
    const actual = instance.getId;

    expected(actual).toEqual(expected);
  });
  Test("should return expected email", () => {
    const expected = "michelle.obama@gmail.com";
    const actual = instance.getEmail;

    expected(actual).toEqual(expected);
  });
  Test("should return expected officeNumber", () => {
    const expected = "12345";
    const actual = instance.getOfficeNumber;

    expected(actual).toEqual(expected);
  });
  Test("should return expected role", () => {});
});
