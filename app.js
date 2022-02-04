const inqurier = require('inquirer');

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
};

// TODO Then prompt whether they'd like to enter in an intern, engineer or finish building my team
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
.then( answer => {
    console.log(answer);
});