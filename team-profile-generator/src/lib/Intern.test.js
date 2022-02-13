const Intern = require("./Intern");

const instance = new Intern(
  "justin Bieber",
  188,
  "justin.bieber@gmail.com",
  "harvard"
);

describe("Intern", () => {
  Test("should be an instance of intern", () => {
    const expected = "Intern";
    const actual = instance.getRole;

    expected(actual).toEqual(expected);
  });
  Test("should return expected name", () => {
    const expected = "Justin Bieber";
    const actual = instance.getName;

    expected(actual).toEqual(expected);
  });
  Test("should return expected id", () => {
    const expected = 188;
    const actual = instance.getId;

    expected(actual).toEqual(expected);
  });
  Test("should return expected email", () => {
    const expected = "justin.bieber@gmail.com";
    const actual = instance.getEmail;

    expected(actual).toEqual(expected);
  });
  Test("should return expected school", () => {
    const expected = "harvard";
    const actual = instance.getSchool;

    expected(actual).toEqual(expected);
  });
  Test("should return expected role", () => {});
});
