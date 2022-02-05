const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test('creates github username', () => {
        const test = new Engineer('Dave', 12, 'Dave@example.com', 'davegithub');

        expect(test.github).toBe('davegithub');
    })

    test('get github', () => {
        const test = new Engineer('Dave', 12, 'Dave@example.com', 'davegithub');

        expect(test.getGithub()).toBe(test.github);
    })

    test('Override getRole', () => {
        const test = new Engineer('Dave', 12, 'Dave@example.com', 13);

        expect(test.getRole()).toBe(test.role);
    })
})