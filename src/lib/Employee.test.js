const Employee = require("./Employee");

const instance = new Employee("Lilly Collins", 190, "lilly.collins@gmail.com");

describe("Employee", () => {
  test("should return expected name", () => {
    const expected = "Lilly Collins";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });
  test("should return expected id", () => {
    const expected = 190;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });
  test("should return expected email", () => {
    const expected = "lilly.collins@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
