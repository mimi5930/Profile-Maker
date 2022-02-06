const inqurier = require('inquirer');
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
       let manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
       return manager;
    });
};

const promptNewMember = (currentTeam) => {
    var team = [];
    team.push(currentTeam);
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
        return newMemberHandler(answer.memberConfirm, team);
    });
}

const newMemberHandler = (confirm, team) => {
    if (confirm === 'intern') {
        console.log('intern')
    } else if (confirm === 'engineer') {
        return createEngineer(team);
    } else {
        team.noNewMembers = true;
        return team;
    }
}

const createEngineer = team => {
    team.noNewMembers = false;
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
        team.push(member);
        console.log(team);
        return team;
    })
}

// TODO: Engineer: engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// TODO: Intern: intern’s name, ID, email, and school, and I am taken back to the menu
// TODO: finish building my team
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
.then(manager => {
    return promptNewMember(manager);
})
.then(team => {
    if (!team.noNewMembers) {
        return promptNewMember(team);
    } else {
        return console.log(team);
    }
});