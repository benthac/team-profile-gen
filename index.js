const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML  = require('./generateHTML');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
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
]
.then(function({ name, id, email, job}){
    newPrompt(name, id, email, job)
})

// function writeToFile(answers) {
//     fs.writeFile('index.HTML', generateHTML(answers), function(err) {
//         if (err) {
//           return console.log(err);
//         }; 
//     });
// }

function newPrompt(name, id, email, job) {
    if (job === 'manager') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is your office number'
            }
        ])
    }

}

function init() {
    inquirer.prompt(questions)
        // .then(answers => {
    // return writeToFile(answers);
    // })
}

init();
