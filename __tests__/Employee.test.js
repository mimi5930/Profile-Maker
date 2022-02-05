const Employee = require('../lib/Employee');


describe('Employee', () => {
    // test constructors
    test('adds name', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.name).toBe('Dave');
    })

    test('adds id', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.id).toEqual(12);
    })

    test('adds email', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.email).toBe('dave@example.com');
    })

    // test class functions
    test('get Name', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.getName()).toBe('Dave');
    })

    test('get Id', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.getId()).toEqual(12);
    })

    test('get Email', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.getEmail()).toBe('dave@example.com');
    })

    test('get Role', () => {
        const test = new Employee('Dave', 12, 'dave@example.com');

        expect(test.getRole()).toBe('employee');
    })
})