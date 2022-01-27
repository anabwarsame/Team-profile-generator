const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const createHtml = (answer) => {
  
  return;
};


// questions about team member
const askTeamQuestions = () => {
  inquirer
  .prompt([
    {
      type: "input",
      name: "team name",
      message: "what is the name of your team?",
    },
    {
      type: "list",
      message: "pick the type of employee:",
      name: "role",
      choices: ["manager", "engineer", "intern"],
    }])
  //   .then((answer) => {
  //     if (answer.manager) {
        
  //       getManagerQuestions();
  //     } else {
  //       console.log("You own", answer.pet_count, "pets");
  //   })

   
  // ])
  // .then((answer) => {
  //   fs.writeFile(
  //     "team-profile-generator.html",
  //     createHtml(answer),
  //     function (err) {
  //       if (err) throw err;
  //     }
  //   );
  // });
  
const getManagerQuestions = () => {

  inquirer.prompt ([
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
}

const getEngineerQuestions = () => {
  inquirer.prompt ([
    {
      type: "input",
      name: "engineers name",
      message: "enter engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "enter engineer's employee id",
    },
    {
      type: "input",
      name: "email",
      message: "enter engineer's email address",
    },
    {
      type: "input",
      name: "github",
      message: "enter engineer's github",
    },

  ])
}

const getInternQuestions = () => {
([
  {
    type: "input",
    name: "interns name",
    message: "enter intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "enter intern employee id",
  },
  {
    type: "input",
    name: "email",
    message: "enter intern email address",
  },
  {
    type: "input",
    name: "office number",
    message: "enter intern office number",
  },
])}

const askNewQuestion = {
  type: "confirm",
  name: "exit",
  message: "do you want to add another employee?",
};

let teamArray = [];

const startApplication = async () => {
  let inProgress = true;

  while (inProgress) {
    const {role} = await inquirer.prompt(askTeamQuestions);
    
    if ( role === "manager") {
      const {name, id, email, officeNumber} = await inquirer.prompt(getManagerQuestions)
    
      const newEmployee = new Manager(name, id, email, officeNumber);
      teamArray.push(newEmployee);
    } else if ( role === "engineer") {
      const {name, id, email, github} = await inquirer.prompt(getEngineerQuestions)
    
      const newEmployee = new Engineer(name, id, email, github);
      teamArray.push(newEmployee);

    
  } else if ( role === "intern") {
    const {name, id, email, school} = await inquirer.prompt(getInternQuestions)
  
    const newEmployee = new Intern(name, id, email, school);
    teamArray.push(newEmployee);

    const {exit} = await inquirer.prompt(askNewQuestion);


}
if (!exit) {
  inProgress = false;
}

}
writeToFile("src/index.html", generateTeam(teamArray));
};


const generateEmployeeCards = (employees) => {

  let cards = [];
  for (let i = 0; i < employees.length; i++) {
    const teamArray = employees[i];
    switch (teamArray.getRole()) {
      case "manager":
       
      const manager = new Manager(
        teamArray.id,
        teamArray.name,
        teamArray.email,
        teamArray.officeNumber,
      );
      cards.push(generateManagerCard(manager));
      break;

      case "engineer":
       
      const engineer = new Engineer(
        teamArray.id,
        teamArray.name,
        teamArray.email,
        teamArray.github,
      );
      cards.push(generateEngineerCard(engineer));
      break;

      case "intern":
       
      const intern = new Intern(
        teamArray.id,
        teamArray.name,
        teamArray.email,
        teamArray.school,
      );
      cards.push(generateInternCard(intern));
      break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${Manager.getId()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span></span> name: ${Manager.getName()}
        </li>

        <li class="list-group-item">
          <span>Email:</span>
          <a href="mailto:{{ email }}"> ${Manager.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <span></span> Office Number: ${Manager.getOfficeNumber()}
        </li>
      </ul>
    </div>
  
  `;
};

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${Engineer.getId()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span></span> name: ${Engineer.getName()}
        </li>

        <li class="list-group-item">
          <span>Email:</span>
          <a href="mailto:{{ email }}"> ${Engineer.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <span></span> Github: ${Engineer.getGithub()}
        </li>
      </ul>
    </div>
  `;
};

let generateInternCard = (Intern) => {
  return `
  <div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${Intern.getId()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <span></span> name: ${Intern.getName()}
    </li>

    <li class="list-group-item">
      <span>Email:</span>
      <a href="mailto:{{ email }}"> ${Intern.getEmail()} </a>
    </li>
    <li class="list-group-item">
      <span></span> School: ${Intern.getSchool()}
    </li>
  </ul>
</div>
  `
}

const generateTeam = (teamArray) => {
  return `
  <!DOCTYPE html>
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
  </head>
  <body>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${Manager.getId()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span></span> name: ${Manager.getName()}
        </li>

        <li class="list-group-item">
          <span>Email:</span>
          <a href="mailto:{{ email }}"> ${Manager.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <span></span> Office Number: ${Manager.getOfficeNumber()}
        </li>
      </ul>
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${Engineer.getId()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span></span> name: ${Engineer.getName()}
        </li>

        <li class="list-group-item">
          <span>Email:</span>
          <a href="mailto:{{ email }}"> ${Engineer.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <span></span> Github: ${Engineer.getGithub()}
        </li>
      </ul>
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${Intern.getId()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span></span> name: ${Intern.getName()}</li>

        <li class="list-group-item">
          <span>Email:</span>
          <a href="mailto:{{ email }}"> ${Intern.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <span></span> School: ${Intern.getSchool()}
        </li>
      </ul>
    </div>
    <div>
      <div> ${generateEmployeeCards(teamArray)} </div>
    </div>
    <script></script>
  </body>
</html>
  `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  }
  catch (error) {
    console.log(error.message);
  }
};

startApplication();