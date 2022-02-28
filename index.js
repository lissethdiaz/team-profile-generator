const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/generateProfile');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamData = [];

const addEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Choose the employee's role",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
          console.log("Please enter the employee's name");
          return false;
        }
      }      
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the employee's ID number",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID number");
          return false;
        }
      }
    },
    
    {
      type: 'input',
      name: 'email',
      message: "Enter the employee's email.",
      validate: emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log ("Please enter the employee's email")
              return false; 
          }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the manager's office number",
      when: (input) => input.role === "Manager",
      validate: officeNumberInput => {
          if  (officeNumberInput) {
              return true; 
          } else {
            console.log ("Please enter the manager's office number")
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the engineer's github username.",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
          if (githubInput ) {
              return true;
          } else {
              console.log ("Please enter the employee's github username")
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the intern's school",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
          if (schoolInput) {
              return true;
          } else {
              console.log ("Please enter the intern's school")
          }
      }
    },
    {
      type: 'confirm',
      name: 'moreEmployee',
      message: 'Would you like to add more employees?',
      default: false
    }
  ])

  .then(employeeData => {

    let { role, name, id, email, officeNumber, github, school, moreEmployee } = employeeData; 
    let employee; 

    if (role === "Manager") {
        employee = new Manager (name, id, email, officeNumber);

        console.log(employee);

    } else if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

  }
     else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamData.push(employee); 

    if (moreEmployee) {
        return addEmployee(teamData); 
    } else {
        return teamData;
    }
  })

};

const writeFile = data => {
fs.writeFile('./dist/index.html', data, err => {
    if (err) {
        console.log(err);
        return; 
    } else {
        console.log("Team profile has been created! Please check the index.html in the dist folder")
    }
  })
}; 

addEmployee()
  .then(teamData => {
  return generateProfile(teamData);
})
  .then(pageHTML => {
  return writeFile(pageHTML);
})
  .catch(err => {
  console.log(err);
});
