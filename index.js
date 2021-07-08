const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML}  = require('./generateHTML');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const { type } = require('os');
const teamArry = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter a valid ID number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a valid email address',
        validate: (email) => {
            if (email) {
                return true
            } else {
                console.log('Please enter your Email address')
                return false
            }
    }},
    {
        type: 'list',
        name: 'job',
        message: 'What is your job title',
        choices: ['manager', 'intern', 'engineer']
    },
    {
        type: 'input',
        name: 'school',
        message: 'What University are you going to?',
        when: (res) => res.job === 'intern'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github account?',
        when: (res) => res.job === 'engineer'
    },  
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office number?',
        when: (res) => res.job === 'manager'
    },  
    {
        type: 'confirm',
        name: 'add',
        message: 'would you like to add another employee?',

    }
    ]


function writeToFile(data) {
    fs.writeFile('index.HTML', generateHTML(data), function(err) {
        if (err) {
          return console.log(err);
        }; 
    });
}

// function newPrompt(name, id, email, job) {
//     if (job === 'manager') {
//         return inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'officenumber',
//                 message: 'What is your office number'
//             }
//         ])
//     }

// }

function init() {
    inquirer.prompt(questions).then((res) => {
        if (res.job === 'intern') {
            const newIntern = new Intern(res.name, res.id, 
            res.email, res.school);
            teamArry.push(newIntern);
        } else if (res.job === 'engineer') {
            const newEngineer = new Engineer(res.name,
                res.id, res.email, res.github);
                teamArry.push(newEngineer);
        } else if (res.job === 'manager') {
            const newManager = new Manager(res.name,
                res.id, res.email, res.officeNumber);
                teamArry.push(newManager);
        }
        if (res.add) {
            init();
        } else {
            console.log('create html');
           writeToFile(teamArry)
        }
    })
}       

init();
