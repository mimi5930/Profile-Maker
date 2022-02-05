const inqurier = require('inquirer');

var manager;

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
                        console.log('Please enter a whole number digit')
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
            name: 'ManagerOfficeNumber',
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
    .then(obj => {
        manager = obj
    });
};

const promptNewMember = () => {
    return inqurier.prompt([
        {
            type: 'list',
            name: 'memberConfirm',
            message: 'Would you like to add an intern, engineer, or finish building your team?',
            choices: ['intern', 'engineer', 'finish building team']
        }
    ])
}

const newMemberHandler = confirm => {
    if ( confirm === 'intern'){
        console.log('intern')
    } else if (confirm === 'engineer') {
        console.log('engineer');
    } else {
        console.log('finish');
    }
}

// const internCreate = teamArr => {
//     if (!teamArr) {
//         teamArr = [];
//     }
//     return inqurier
//     .prompt([
//         {

//         }
//     ])
// }

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
.then(promptNewMember)
.then( answer => {
    console.log(manager);
    newMemberHandler(answer.memberConfirm);
});