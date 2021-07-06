const Employee = require('../lib/employee');

test('creates an employee object with a name', () => {
    const employee = new Employee('Mark', '33', 'mark@mark.net');

    expect(employee.name).toBe('Mark');
});

