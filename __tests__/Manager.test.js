const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('Create manager office number', () => {
        const test = new Manager('Dave', 12, 'Dave@example.com', 13);

        expect(test.officeNumber).toEqual(13);
    })

    test('Override getRole', () => {
        const test = new Manager('Dave', 12, 'Dave@example.com', 13);

        expect(test.getRole()).toBe('manager');
    })
})