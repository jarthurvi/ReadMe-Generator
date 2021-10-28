// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please include installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?',
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'testinstructions',
        message: 'What are the test instructions?',
      },
    {
      type: 'checkbox',
      message: 'What kind of license?',
      name: 'license',
      choices: ['Apache', 'BSD', 'Creative Commons','Boost'],
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'githubinfo',
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
  ])
  .then((data) => {
    fs.writeFile('README.md', generateMarkdown(data),(err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
