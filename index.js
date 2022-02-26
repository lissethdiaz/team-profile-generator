const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/generateProfile');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

const addManager = () => {
  return inquirer.prompt ([
  {
    type: 'input',
    name: 'name',
    message: "What is the manager's name",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the manager's name");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the manager's ID number",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the manager's ID number");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the manager's email",
    validate: emailInput => {
      validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter a valid email");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Enter the manager's office number",
    validate: officeNumInput => {
      if (officeNumInput) {
        return true;
      } else {
        console.log("Please enter the manager's office number");
        return false;
      }
    }
  }
])
.then(managerInfo => {
  const { name, id, email, officeNumber } = managerInfo;
  const manager = new Manager (name, id, email, officeNumber);
  team.push(manager);
  })
};