const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "what is the name of your team?",
    },
    {
      type: "list",
      message: "pick the type of employee:",
      name: "role",
      choices: ["manager", "engineer", "intern"],
    },
    {
      type: "input",
      name: "managers name",
      message: "enter manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "enter manager employee id",
    },
    {
      type: "input",
      name: "email",
      message: "enter manager email address",
    },
    {
      type: "input",
      name: "office number",
      message: "enter manager office number",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
