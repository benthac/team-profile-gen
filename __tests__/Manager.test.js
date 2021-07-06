const Manager = require('../lib/manager');

test('to include office number', () => {
    const manager = new Manager('bob', '12', 'bob@workemail.com', '230');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});