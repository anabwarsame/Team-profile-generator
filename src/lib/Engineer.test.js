const Engineer = require("./Engineer");

const instance = new Engineer(
  "james Brown",
  187,
  "james.brown@gmail.com",
  "JamesB"
);

describe("Engineer", () => {
  test("should be an instance of engineer", () => {
    const expected = "ENGINEER";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  test("should return expected name", () => {
    const expected = "james Brown";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });
  test("should return expected id", () => {
    const expected = 187;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });
  test("should return expected email", () => {
    const expected = "james.brown@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
  test("should return expected github", () => {
    const expected = "JamesB";
    const actual = instance.getGithub();

    expect(actual).toEqual(expected);
  });
});
