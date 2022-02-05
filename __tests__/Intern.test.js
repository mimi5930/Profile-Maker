const Intern = require('../lib/Intern');

describe('Intern', () => {
    test('creates school', () => {
        const test = new Intern('Dave', 12, 'Dave@example.com', 'U of M');

        expect(test.school).toBe('U of M');
    })

    test('get school', () => {
        const test = new Intern('Dave', 12, 'Dave@example.com', 'U of M');

        expect(test.getSchool()).toBe(test.school);
    })

    test('Override getRole', () => {
        const test = new Intern('Dave', 12, 'Dave@example.com', 'U of M');

        expect(test.getRole()).toBe(test.role);
    })
})