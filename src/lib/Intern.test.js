const Intern = require("./Intern");

const instance = new Intern(
  "justin Bieber",
  188,
  "justin.bieber@gmail.com",
  "harvard"
);

describe("Intern", () => {
  test("should be an instance of intern", () => {
    const expected = "INTERN";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  test("should return expected name", () => {
    const expected = "justin Bieber";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });
  test("should return expected id", () => {
    const expected = 188;
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });
  test("should return expected email", () => {
    const expected = "justin.bieber@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
  test("should return expected school", () => {
    const expected = "harvard";
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
