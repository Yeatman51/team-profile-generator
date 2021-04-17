const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Htmlsetup = require('./src/htmlsetup');

async function main(){
    let html = Htmlsetup.beginHtml()
    html += Htmlsetup.makeHead()
    html += Htmlsetup.beginBody()
    html += Htmlsetup.makeHeader()
    html += Htmlsetup.beginCards()
    let done = false;

    // Get Manager's info
    await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Manager\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s employee id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the Manager\'s office number?',
                name: 'officeNumber',
            },
        ])
        .then((responses) => {
            let employee = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
            html += Htmlsetup.makeCard(employee.getName(), employee.getRole(), employee.getId(), employee.getEmail(), employee.getOfficeNumber());
        });

    // While not done do prompts
    while (!done) {
        // Ask user whether they are done or want to fill out info about and Engineer or intern
        let choice = "";
        await inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Do you want to add a team member? If so, what kind?',
                    name: 'employeeTitle',
                    choices: ["Engineer", "Intern", "Done"],
                },
            ])
            .then((responses) => {
                choice = responses.employeeTitle;
                console.log(choice);
            });

        // Display prompt for Engineer, intern, or set done to true.
        if (choice === "Engineer") {
            await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the Engineer\'s name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineer\'s employee id?',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineer\'s email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineer\'s GitHub?',
                        name: 'github',
                    },
                ])
                .then((responses) => {
                    let employee = new Engineer(responses.name, responses.id, responses.email, responses.github);
                    html += Htmlsetup.makeCard(employee.getName(), employee.getRole(), employee.getId(), employee.getEmail(), employee.getGitHub());
                });
        } else if (choice === "Intern") {
            await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the Intern\'s name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is the Intern\'s employee id?',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'What is the Intern\'s email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'Where does the Intern go to school?',
                        name: 'school',
                    },
                ])
                .then((responses) => {
                    let employee = new Intern(responses.name, responses.id, responses.email, responses.school);
                    html += Htmlsetup.makeCard(employee.getName(), employee.getRole(), employee.getId(), employee.getEmail(), employee.getSchool());
                });
        } else {
            done = true;
        }
    }

    html += Htmlsetup.endCardsBodyAndHtml();
    fs.writeFile('dist/index.html', html, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
}
main();