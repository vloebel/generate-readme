// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const outputFileName = 'README.md'
let markdownString = '';

//////////////////////////////////////////////
// FUNCTION writeFile
// writes fileContent string to ./dist/outputFileName
///////////////////////////////////////////////
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${outputFileName}`, fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: `${outputFileName} created in ./dist folder`
      });
    });
  });
};
//////////////////////////////////////////////////////
// INQUIRER Question Function
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
      message: 'Installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage:',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'List contributors:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test Cases:',
    },

    {
      type: 'list',
      name: 'license',
      message: "Use arrow keys to select project license:",
      choices: ['None',  'Apache 2.0', 'GNU GPL v2', 'GNU GPL v3', 'MIT','Mozilla 2.0', ],
  }

  ])
};

////////////////////////////////////////////

    promptUser()
      .then(answers => {
        markdownString = generateMarkdown(answers)
        console.log('writing....')
        writeFile(markdownString);
      });
        



      
      
