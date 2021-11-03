const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let employeeArray = []
const questions = [
    {
        type: "input",
        message: "What is the Team Member's name?",
        name: 'name',
    },
    {
        type: "number",
        message: "What will be Team Member's ID be?",
        name: 'id',
    },
    {
        type: "input",
        message: "What is the Team Member's e-mail address?",
        name: 'email',
    },
]

const commonQuestions = [...questions]

const managerQuestion = [
    ...commonQuestions,
    {
        type: 'input',
        message: 'What is the Team Manager\'s office number?',
        name: 'officeNumber',
    }
]

const EngineerQuestion = [
    ...commonQuestions,
    {
        type: 'input',
        message: 'What is the Engineer\'s Github Profile?',
        name: 'github',
    }
]

const internQuestion = [
    ...commonQuestions,
    {
        type: 'input',
        message: 'What school did the Intern attend?',
        name: 'school',
    }
]

const finalQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another Team Member?',
        choices: ['Engineer', 'Intern', 'No, the team is complete'],
        name: 'choices',
    }
]

function teamMembers() {
    inquirer.prompt(managerQuestion).then((answer) => {
        console.log(answer)
        let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employeeArray.push(newManager);
        console.log(employeeArray)
        generateManagerHTML(newManager);

        promptQuestion();
    })
}

function engineerPrompt() {
    inquirer.prompt(EngineerQuestion).then((answer) => {
        console.log(answer)
        let newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employeeArray.push(newEngineer);
        console.log(employeeArray)
        generateEngineerHTML(newEngineer);

        promptQuestion();
    })
}

function internPrompt() {
    inquirer.prompt(internQuestion).then((answer) => {
        console.log(answer)
        let newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
        employeeArray.push(newIntern);
        console.log(employeeArray)
        generateInternHTML(newIntern);

        promptQuestion();
    })
}

function promptQuestion() {
    inquirer.prompt(finalQuestion).then((response) => {
        switch(response.choices) {
            case 'Engineer':
                engineerPrompt();

                break;

            case 'Intern':
                internPrompt();

                break;
            default:
                generateHTML();
        }
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, member) {
    console.log(fileName);
    console.log(member);
    fs.writeFile(fileName, generateMarkdown(member), (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    teamMembers();
    inquirer.prompt(employeeArray).then(answers => {
      // console.log(answers);
       // fs.writeFile('ans')
       writeToFile('team.html', answers)
    })
}

// // Function to Initialize the app
// function init() {
//     console.log("let's build your Team profile by starting with your team manager")
//       generateTeam();
//       generateHTML(); 
//     }

init();