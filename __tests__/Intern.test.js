const Intern = require('../lib/intern');

test('to include a school', () => {
    const intern = new Intern('school');

    expect(intern.school).toBe('school');
});