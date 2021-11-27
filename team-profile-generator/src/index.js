const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      message: "pick the type of employee:",
      name: "role",
      choices: ["manager", "engineer", "intern"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
