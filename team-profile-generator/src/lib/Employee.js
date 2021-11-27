class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {}
  getEmail() {}
  getRole() {
    return "Employee";
  }
}

let employee = new Employee("anab", 1234, "anab@gmail.com");
console.log(employee.getRole());

module.exports = Employee;
