const Employee = require("./Employee.js");
class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

let engineer = new Engineer("anab", 1234, "anab@gmail.com", "dinosaur");
console.log(engineer.getRole());
