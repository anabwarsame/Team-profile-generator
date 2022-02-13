const Manager = require("./Manager");

const instance = new Manager(
  "Michelle Obama",
  189,
  "michelle.obama@gmail.com",
  "12345"
);

describe("Manager", () => {
  test("should be an instance of ", () => {
    const expected = "MANAGER";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  test("should return expected name", () => {
    const expected = "Michelle Obama";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });
  test("should return expected id", () => {
    const expected = 189;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });
  test("should return expected email", () => {
    const expected = "michelle.obama@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
  test("should return expected officeNumber", () => {
    const expected = "12345";
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
