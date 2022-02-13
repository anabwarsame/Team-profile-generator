const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// All questions
const teamNameQuestion = {
  type: "input",
  name: "teamName",
  message: "Enter team name:",
};

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter manager name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter manager employee ID:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter manager email address:",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "Enter manager office number:",
  },
];

const selectActionQuestion = {
  type: "list",
  message: "Select the action to perform:",
  name: "action",
  choices: [
    {
      name: "Add an engineer",
      value: "ENGINEER",
    },
    {
      name: "Add an intern",
      value: "INTERN",
    },
    {
      name: "Quit application",
      value: "QUIT",
    },
  ],
};

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter engineer's name:",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter engineer's employee ID:",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter engineer's email address:",
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "Enter engineer's github username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter intern's name:",
  },
  {
    type: "input",
    name: "internId",
    message: "Enter intern's employee ID:",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter intern's email address:",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter intern's school:",
  },
];

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const generateEngineerCard = (employee) => {
  return `<div class="card m-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
      <p class="card-text">Employee ID: ${employee.id}</p>
      <a href="mailto:${employee.email}" class="card-link">Email</a>
      <a href="https://github.com/${employee.github}" class="card-link"
        >GitHub</a
      >
    </div>
  </div>`;
};

const generateInternCard = (employee) => {
  return `<div class="card m-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
      <p class="card-text">Employee ID: ${employee.id}</p>
      <p class="card-text">School: ${employee.school}</p>
      <a href="mailto:${employee.email}" class="card-link">Email</a>
    </div>
  </div>`;
};

const generateOtherEmployeeCards = (employees) => {
  return employees.map((employee) => {
    if (employee.getRole() === "ENGINEER") {
      return generateEngineerCard(employee);
    }
    if (employee.getRole() === "INTERN") {
      return generateInternCard(employee);
    }

    return "";
  });
};

const generateTeam = (employees, teamName) => {
  const manager = employees.find((employee) => {
    return employee.getRole() === "MANAGER";
  });

  const otherEmployees = employees.filter((employee) => {
    return employee.getRole() !== "MANAGER";
  });

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team</title>
      <link rel="stylesheet" href="./styles.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <style>
        .jumbotron {
          padding: 2rem 1rem;
          margin-bottom: 2rem;
          background-color: #e9ecef;
          border-radius: 0.3rem;
        }
      </style>
    </head>
    <body>
      <header>
        <div class="jumbotron text-center">
          <h1 class="display-4">${teamName}</h1>
          <p class="lead">This is the organisational hierarchy of the team</p>
          <hr class="my-4" />
        </div>
      </header>
  
      <main>
        <div class="container my-3 d-flex flex-wrap justify-content-center">
          <div class="card m-3" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
              <p class="card-text">manager ID: ${manager.id}</p>
              <a href="mailto:${manager.email}" class="card-link">Email</a>
              <a href="tel:${manager.officeNumber}" class="card-link"
                >Office Number</a
              >
            </div>
          </div>
        </div>
        <div class="container my-3 d-flex flex-wrap justify-content-center">
          ${generateOtherEmployeeCards(otherEmployees).join("")}
        </div>
      </main>
    </body>
  </html>`;
};

const startApplication = async () => {
  const employees = [];

  let inProgress = true;

  // prompt question to ask for team name
  const { teamName } = await inquirer.prompt(teamNameQuestion);

  // prompt question to get manager details
  const { managerName, managerEmail, managerId, managerOfficeNumber } =
    await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerName,
    managerId,
    managerEmail,
    managerOfficeNumber
  );

  employees.push(manager);

  while (inProgress) {
    const { action } = await inquirer.prompt(selectActionQuestion);

    if (action === "ENGINEER") {
      const { engineerName, engineerId, engineerEmail, engineerGitHub } =
        await inquirer.prompt(engineerQuestions);

      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGitHub
      );

      employees.push(engineer);
    }

    if (action === "INTERN") {
      const { internName, internId, internEmail, internSchool } =
        await inquirer.prompt(internQuestions);

      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      employees.push(intern);
    }

    if (action === "QUIT") {
      inProgress = false;
    }
  }

  // generate HTML for all employees
  const html = generateTeam(employees, teamName);

  // write the HTML to file
  writeToFile(path.join(__dirname, "../index.html"), html);

  console.log("Successfully generated team profile");

  process.exit(0);
};

startApplication();
