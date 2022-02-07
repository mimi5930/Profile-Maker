const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// test array
var teamArr = [
    {
        name: 'Bill',
        id: '1',
        email: 'bill@example.com',
        role: 'manager',
        officeNumber: '3'
    },
    {
        name: 'Jen',
        id: '2',
        email: 'jen@example.com',
        role: 'engineer',
        github: 'jen-codes'
    },
    {
        name: 'Jack',
        id: '3',
        email: 'jack@example.com',
        role: 'engineer',
        github: 'jack-codes'
    },
    {
        name: 'Lexi',
        id: '4',
        email: 'lexi@example.com',
        role: 'intern',
        school: 'school example'
    }
]

const breakDownRoles = function(teamArr) {
    for (i = 0; i > teamArr.length; i++) {
        if (teamArr[i].role === 'manager') {
            
        }
    }
}

breakDownRoles(teamArr);