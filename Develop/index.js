const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const { title } = require('process');
const { default: Choices } = require('inquirer/lib/objects/choices');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
        {
            type: "input",
            message: "Please enter your project title:",
            name: "title",
        },
        {
            type: "input",
            message: "Please enter a description:",
            name: "description",
        },
        {
            type: "input",
            message: "Please enter the installation instuctions:",
            name: "instuctions",
        },
        {
            type: "input",
            message: "Please enter the usage information:",
            name: "information",
        },
        {
            type: "input",
            message: "Please enter the contribution guidelines:",
            name: "guidelines",
        },
        {
            type: "checkbox",
            message: "Please choose the appropriate license:",
            name: "license",
            choices: ['IBM', 'Eclipse', 'MIT', 'Modzila', 'ISC', 'Apache 2.0', 'Boost Software License 1.0']
        },
        {
            type: "input",
            message: "Please enter test instructions:",
            name: "test",
        },
        {
            type: "input",
            message: "Please enter your email:",
            name: "email"
        },
        {
            type: "inpute",
            message: "Please enter your Github username",
            name: "username"
        },
];



inquirer.prompt(questions).then(answers => {
     const readMeFile = `
     ${answers.title}
     
     Description:
     ${answers.description}

     Intallation Instructions:
     ${answers.instructions}

     Usage Information:
     ${answers.information}

     Contribution Guidelines:
     ${answers.guidelines}

     License:
     ${answers.license}
    
     Test Instructions:
     ${answers.test}

     Email Address:
     ${answers.email}

     Github Username:
     ${answers.username}
     `;

     fs.writeFileSync(path.join(__dirname, 'README.md'), readMeFile.trim());
});

function writeToFile(__dirname, readMeFile) {
    fs.writeFile(__dirname, readMeFile, (err) => {
        if (err) {
          console.error(`Error writing to file ${fileName}:`, err);
        } else {
          console.log(`File ${fileName} has been written successfully.`);
        }
      });
    }


// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
// console.log(answers)
// write function to select which badge to show base on the users license answer on line 65
// console.log(questions) 
// TODO: Create a function to write README file
// Function call to initialize app
// init();


