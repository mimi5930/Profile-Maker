const inqurier = require('inquirer');
const Team = require('./lib/Team');


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
    ]);
};

const promptNewMember = (manager) => {
    if (!team) {
        var team = manager;
        console.log(team);
    }
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
        newMemberHandler(answer.memberConfirm, team);
    });
}

const newMemberHandler = (confirm, team) => {
    if (confirm === 'intern') {
        console.log('intern')
    } else if (confirm === 'engineer') {
        return createEngineer(team);
    } else {
        console.log('finish');
        return team;
    }
}

const createEngineer = team => {
    if (!team.teamMembers) {
        team.teamMembers = [];
    }
    inqurier
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
        let member = new Team(name, ID, email);
        member.addEngineer(gitHub);
        console.log(member);
        team.teamMembers.push(member);
        console.log(team);
        return team;
    })
}

// !FIX TO INCORPORATE NEW CLASSES!!
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
    promptNewMember(manager);
});
// .then(team => {
//     if (team.)
// });