const Engineer = require("./Engineer");

const instance = new Engineer(
  "james Brown",
  187,
  "james.brown@gmail.com",
  "JamesB"
);

describe("Engineer", () => {
  Test("should be an instance of engineer", () => {
    const expected = "Engineer";
    const actual = instance.getRole;

    expected(actual).toEqual(expected);
  });
  Test("should return expected name", () => {
    const expected = "James Brown";
    const actual = instance.getName;

    expected(actual).toEqual(expected);
  });
  Test("should return expected id", () => {
    const expected = 187;
    const actual = instance.getId;

    expected(actual).toEqual(expected);
  });
  Test("should return expected email", () => {
    const expected = "james.brown@gmail.com";
    const actual = instance.getEmail;

    expected(actual).toEqual(expected);
  });
  Test("should return expected github", () => {
    const expected = "JamesB";
    const actual = instance.getGithub;

    expected(actual).toEqual(expected);
  });
  Test("should return expected role", () => {});
});
