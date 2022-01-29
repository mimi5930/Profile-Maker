const Team = require('../lib/Team');

describe('Team class', () => {
    test('gives a name', () => {
        const employee = new Team('Dave', 2, 'dave@test.com', 'manager');

        expect(employee.name).toEqual('Dave');
    });

    test('gives an employee ID', () => {
        const employee = new Team('Dave', 2, 'dave@test.com', 'manager');

        expect(employee.id).toBe(2);
    });

    test('give an email', () => {
        const employee = new Team('Dave', 2, 'dave@test.com', 'manager');

        expect(employee.email).toEqual('dave@test.com');
    });

    test('give the employee a role', () => {
        const employee = new Team('Dave', 2, 'dave@test.com', 'manager');
        expect(employee.role).toEqual('manager');
    });

});