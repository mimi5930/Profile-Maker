const inqurier = require('inquirer');
const { pageTemplate } = require('./src/page-template');
const { createHTML, copyCSS } = require('./utils/generate-site');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Prompt Manager
const createManager = () => {
   return inqurier
    .prompt([
        {
            name: 'managerName',
            message: `Please enter the Manager's name`
        },
        {
            name: 'managerID',
            message: `Enter the manager's ID`,
            validate: answer => {
                if (parseInt(answer)) {
                    if (answer % 1 === 0) {
                        return true;
                    } else {
                        console.log('Please enter a whole number')
                        return false;
                    }
                } else {
                    console.log('Please enter a number')
                    return false;
                }
            }
        },
        {
            name: 'managerEmail',
            message: `Please enter the manager's email`
        },
        {
            name: 'managerOfficeNumber',
            message: `Please enter the manager's office number`,
            validate: answer => {
                if (parseInt(answer)) {
                    if (answer % 1 === 0) {
                        return true;
                    } else {
                        console.log('Please enter a whole number digit')
                        return false;
                    }
                } else {
                    console.log('Please enter a number')
                    return false;
                }
            }
        }
    ])
    .then(managerObj => {
       let { managerName, managerID, managerEmail, managerOfficeNumber } = managerObj;
       let member = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
       var team = []
       let manager = employeeObj(member);
       team.push(manager);
       return team;
    });
};

const promptNewMember = (team) => {
    return inqurier
    .prompt([
        {
            type: 'list',
            name: 'memberConfirm',
            message: 'Would you like to add an intern, engineer, or finish building your team?',
            choices: ['intern', 'engineer', 'finish building team']
        }
    ])
    .then(answer => {
        let { memberConfirm } = answer;
        if (memberConfirm === 'intern') {
            return createIntern(team);
        } else if (memberConfirm === 'engineer') {
            return createEngineer(team);
        } else if (memberConfirm === 'finish building team') {
            team.noNewMembers = true;
            return team;
        }
    })
    .then(team => {
        if (!team.noNewMembers) {
            return promptNewMember(team);
        }
        return team;
    });
}

const createEngineer = team => {
    return inqurier
    .prompt([
        {
            name: 'name',
            message: `What is the engineer's name?`
        }, 
        {
            name: 'ID',
            message: `What is the engineer's ID?`
        },
        {
            name: `email`,
            message: `What is the engineer's email address?`
        },
        {
            name: 'gitHub',
            message: `what is the engineer's GitHub username?`
        }
    ])
    .then(obj => {
        let { name, ID, email, gitHub } = obj;
        let member = new Engineer(name, ID, email, gitHub);
        team.noNewMembers = false;
        let engineer = employeeObj(member);
        team.push(engineer);
        return team;
    })
}

const createIntern = team => {
    return inqurier
    .prompt([
        {
            name: 'name',
            message: `What is the intern's name?`
        }, 
        {
            name: 'ID',
            message: `What is the intern's ID?`
        },
        {
            name: `email`,
            message: `What is the intern's email address?`
        },
        {
            name: 'school',
            message: `what school did the intern attend?`
        }
    ])
    .then(obj => {
        let { name, ID, email, school } = obj;
        let member = new Intern(name, ID, email, school);
        let intern = employeeObj(member);
        team.push(intern);
        return team;
    })
}


const employeeObj = employee => {
    let role = employee.getRole();
    if (role === 'manager') {
        let obj = {};
        obj.name = employee.getName();
        obj.id = employee.getId();
        obj.email = employee.getEmail();
        obj.role = role;
        obj.officeNumber = employee.officeNumber;
        return obj;
    } else if (role === 'intern') {
        let obj = {};
        obj.name = employee.getName();
        obj.id = employee.getId();
        obj.email = employee.getEmail();
        obj.role = role;
        obj.officeNumber = employee.getSchool();
        return obj;
    } else if (role === 'engineer') {
        let obj = {};
        obj.name = employee.getName();
        obj.id = employee.getId();
        obj.email = employee.getEmail();
        obj.role = role;
        obj.github = employee.getGithub();
        return obj;
    }
}


// TODO: prompt HTML generation

const welcomeMessage = () => {
console.log(`
========================================
Welcome to your team profile builder.
Please enter info about your team below!
========================================
`)
}

welcomeMessage();
createManager()
.then(team => {
    return promptNewMember(team);
})
.then(team => {
    return pageTemplate(team);
})
.then(html => {
    copyCSS();
    return createHTML(html);
})
.catch(error => {
    console.log(error);
})

