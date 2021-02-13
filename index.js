
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/fileio.js');
const outputFileName = 'README.md';
let stringToWrite = '';

//////////////////////////////////////////////////////
// INQUIRER Question Promise
/////////////////////////////////////////////////////
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title (required):',
      validate: titleInput => {
        titleInput = titleInput.trim();
        if (titleInput) {
          return true;
        } else {
          console.log('Please provide a title for your README:');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'description',
      message: 'Project description (required):',
      validate: titleInput => {
        titleInput = titleInput.trim();
        if (titleInput) {
          return true;
        } else {
          console.log('Please provide a short description of your project:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'Installation:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can the community contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test Cases:',
    },
    {
      type: 'input',
      name: 'userName',
      message: 'GitHub user name (required):',
      validate: userNameInput => {
        userNameInput = userNameInput.trim();
        if (userNameInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmEmail',
      message: 'Would you like to add your email?',
      default: true,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your contact email:',
      when: ({ confirmEmail }) => confirmEmail
    },
    {
      type: 'list',
      name: 'license',
      message: "Use arrow keys to select project license:",
      choices: ['None', 'Apache 2.0', 'GNU GPL v2', 'GNU GPL v3', 'MIT', 'Mozilla 2.0',]
    },
  ])
};

////////////////////////////////////////////

promptUser()
  .then(answers => {
    stringToWrite = generateMarkdown(answers)
    writeFile(stringToWrite, outputFileName);
  });

